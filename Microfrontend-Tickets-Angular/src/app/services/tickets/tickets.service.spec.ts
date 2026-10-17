import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Ticket } from '../../interfaces/tickets.interface';
import { TICKETS_MOCK } from '../../mocks/tickets.mocks';
import { TicketsService } from './tickets.service';

describe('TicketsService', () => {
  let service: TicketsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(TicketsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no queden peticiones HTTP pendientes
    httpMock.verify();
  });

  describe('Creación del servicio', () => {
    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('getAllTickets', () => {
    it('debería realizar una petición GET a la URL base y retornar la lista de tickets', () => {
      const mockTickets: Ticket[] = TICKETS_MOCK;

      service.getAllTickets().subscribe((tickets: Ticket[]) => {
        expect(tickets).toEqual(mockTickets);
        expect(tickets.length).toBe(mockTickets.length);
      });

      const req = httpMock.expectOne('http://localhost:3005/api/tickets');
      expect(req.request.method).toBe('GET');

      req.flush(mockTickets);
    });

    it('debería realizar una petición GET con countTickets parametrizado en la URL', () => {
      const countTickets = 5;
      const mockTickets: Ticket[] = TICKETS_MOCK;

      service.getAllTickets(countTickets).subscribe((tickets: Ticket[]) => {
        expect(tickets).toEqual(mockTickets);
      });

      const req = httpMock.expectOne(`http://localhost:3005/api/tickets/${countTickets}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockTickets);
    });

    it('debería propagar un error si la petición HTTP falla con código 500', () => {
      service.getAllTickets().subscribe({
        next: () => {
          fail('No debería emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne('http://localhost:3005/api/tickets');
      req.flush(
        { message: 'Error interno del servidor de tickets' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });

    it('debería propagar un error si la petición HTTP falla con código 404', () => {
      service.getAllTickets(10).subscribe({
        next: () => {
          fail('No debería emitir datos cuando ocurre un error 404');
        },
        error: (error) => {
          expect(error.status).toBe(404);
        },
      });

      const req = httpMock.expectOne('http://localhost:3005/api/tickets/10');
      req.flush(
        { message: 'Recurso no encontrado' },
        { status: 404, statusText: 'Not Found' }
      );
    });
  });
});
