import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { AlertComponent } from '../../components/alert/alert.component';
import { ProvidersTableComponent } from '../../components/providers-table/providers-table.component';
import { PROVIDERS_MOCK } from '../../mocks/providers.mocks';
import { ProvidersService } from '../../services/providers/providers.service';
import { ProvidersPage } from './providers.page';

describe('ProvidersPage', () => {
  let component: ProvidersPage;
  let fixture: ComponentFixture<ProvidersPage>;
  let providersService: ProvidersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvidersPage, ProvidersTableComponent, AlertComponent],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProvidersPage);
    component = fixture.componentInstance;
    providersService = TestBed.inject(ProvidersService);
  });

  it('debería crear el componente ProvidersPage correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería invocar getAllProviders del servicio en el ciclo ngOnInit', () => {
    const spy = jest.spyOn(providersService, 'getAllProviders').mockReturnValue(of(PROVIDERS_MOCK));
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('debería asignar los datos y cambiar el estado a "success" cuando el servicio responde exitosamente', () => {
    jest.spyOn(providersService, 'getAllProviders').mockReturnValue(of(PROVIDERS_MOCK));
    fixture.detectChanges();

    expect(component.state).toBe('success');
    expect(component.providers).toEqual(PROVIDERS_MOCK);
    expect(component.providers.length).toBe(PROVIDERS_MOCK.length);
  });

  it('debería enlazar los proveedores al componente hijo app-providers-table', () => {
    jest.spyOn(providersService, 'getAllProviders').mockReturnValue(of(PROVIDERS_MOCK));
    fixture.detectChanges();

    const tableComponent = fixture.debugElement
      .query(By.directive(ProvidersTableComponent))
      .componentInstance as ProvidersTableComponent;

    expect(tableComponent).toBeTruthy();
    expect(tableComponent.providers).toEqual(PROVIDERS_MOCK);
  });

  it('debería manejar el error y cambiar el estado a "error" cuando la petición falla', () => {
    const errorResponse = new Error('Fallo de red en el microservicio');
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(providersService, 'getAllProviders').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(component.state).toBe('error');
    expect(component.providers.length).toBe(0);
    expect(console.error).toHaveBeenCalled();
  });

  it('debería renderizar la alerta de carga cuando el estado es "loading"', () => {
    component.state = 'loading';
    fixture.detectChanges();

    const alertElement = fixture.debugElement.query(By.directive(AlertComponent));
    expect(alertElement).toBeTruthy();
    expect(alertElement.componentInstance.alertState).toBe('loading');
  });

  it('debería renderizar la alerta de error cuando el estado es "error"', () => {
    component.state = 'error';
    fixture.detectChanges();

    const alertElement = fixture.debugElement.query(By.directive(AlertComponent));
    expect(alertElement).toBeTruthy();
    expect(alertElement.componentInstance.alertState).toBe('error');
  });
});
