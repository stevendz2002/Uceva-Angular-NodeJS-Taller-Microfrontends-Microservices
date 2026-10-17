import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Order } from '../../interfaces/orders.interface';
import { ORDERS_MOCK } from '../../mocks/orders.mocks';
import { OrdersService } from './orders.service';

describe('OrdersService', () => {
  let service: OrdersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(OrdersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no existan peticiones HTTP pendientes
    httpMock.verify();
  });

  describe('Creación del servicio', () => {
    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('getAllOrders', () => {
    it('debería realizar una petición GET a la raíz y retornar la lista de órdenes', () => {
      const mockOrders: Order[] = ORDERS_MOCK;

      service.getAllOrders().subscribe((orders) => {
        expect(orders).toEqual(mockOrders);
        expect(orders.length).toBe(mockOrders.length);
      });

      const req = httpMock.expectOne('http://localhost:3004/api/orders');
      expect(req.request.method).toBe('GET');

      req.flush(mockOrders);
    });

    it('debería realizar una petición GET con parámetro de cantidad especificado', () => {
      const countOrders = 5;
      const mockOrders: Order[] = ORDERS_MOCK;

      service.getAllOrders(countOrders).subscribe((orders) => {
        expect(orders).toEqual(mockOrders);
      });

      const req = httpMock.expectOne(`http://localhost:3004/api/orders/${countOrders}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockOrders);
    });

    it('debería propagar un error si la petición HTTP falla con código 500', () => {
      service.getAllOrders().subscribe({
        next: () => {
          fail('No debería emitir datos cuando ocurre un error en el servidor');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne('http://localhost:3004/api/orders');
      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });
  });
});
