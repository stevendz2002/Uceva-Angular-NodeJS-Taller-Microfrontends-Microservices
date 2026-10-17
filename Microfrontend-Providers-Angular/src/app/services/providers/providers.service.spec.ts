import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Provider } from '../../interfaces/providers.interface';
import { PROVIDERS_MOCK } from '../../mocks/providers.mocks';
import { ProvidersService } from './providers.service';

describe('ProvidersService', () => {
  let service: ProvidersService;
  let httpMock: HttpTestingController;
  const baseUrl = 'http://localhost:3003/api/providers';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(ProvidersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Creación del servicio', () => {
    it('debería instanciar el servicio exitosamente', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('getAllProviders', () => {
    it('debería solicitar proveedores por defecto a la URL base sin parámetros', () => {
      const mockData: Provider[] = PROVIDERS_MOCK;

      service.getAllProviders().subscribe((providers) => {
        expect(providers).toEqual(mockData);
        expect(providers.length).toBe(mockData.length);
      });

      const req = httpMock.expectOne(baseUrl);
      expect(req.request.method).toBe('GET');
      req.flush(mockData);
    });

    it('debería solicitar proveedores con parámetro count en la URL', () => {
      const count = 5;
      const mockData: Provider[] = PROVIDERS_MOCK.slice(0, count);

      service.getAllProviders(count).subscribe((providers) => {
        expect(providers).toEqual(mockData);
        expect(providers.length).toBe(count);
      });

      const req = httpMock.expectOne(`${baseUrl}/${count}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockData);
    });

    it('debería manejar correctamente una lista vacía de proveedores', () => {
      service.getAllProviders().subscribe((providers) => {
        expect(providers).toEqual([]);
        expect(providers.length).toBe(0);
      });

      const req = httpMock.expectOne(baseUrl);
      req.flush([]);
    });

    it('debería propagar error cuando el servidor responde con 500', () => {
      service.getAllProviders().subscribe({
        next: () => fail('No debería emitir datos ante un error HTTP'),
        error: (error) => {
          expect(error.status).toBe(500);
          expect(error.statusText).toBe('Internal Server Error');
        },
      });

      const req = httpMock.expectOne(baseUrl);
      req.flush(
        { message: 'Error interno del microservicio' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });

    it('debería propagar error cuando el servidor responde con 404', () => {
      service.getAllProviders(99).subscribe({
        next: () => fail('No debería emitir datos ante un error 404'),
        error: (error) => {
          expect(error.status).toBe(404);
        },
      });

      const req = httpMock.expectOne(`${baseUrl}/99`);
      req.flush({ message: 'No encontrado' }, { status: 404, statusText: 'Not Found' });
    });
  });
});
