import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable, of, throwError } from 'rxjs';
import { AlertComponent } from '../../components/alert/alert.component';
import { OrdersTableComponent } from '../../components/orders-table/orders-table.component';
import { ORDERS_MOCK } from '../../mocks/orders.mocks';
import { OrdersService } from '../../services/orders/orders.service';
import { OrdersPage } from './orders.page';

describe('OrdersPage', () => {
  let component: OrdersPage;
  let fixture: ComponentFixture<OrdersPage>;
  let ordersService: OrdersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersPage, OrdersTableComponent, AlertComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersPage);
    component = fixture.componentInstance;
    ordersService = TestBed.inject(OrdersService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllOrders al iniciar el ciclo de vida', () => {
    const spyGetAllOrders = jest
      .spyOn(ordersService, 'getAllOrders')
      .mockReturnValue(of(ORDERS_MOCK));

    fixture.detectChanges();

    expect(spyGetAllOrders).toHaveBeenCalledWith(10);
  });

  it('debería asignar las órdenes recibidas y cambiar el estado a success', () => {
    jest.spyOn(ordersService, 'getAllOrders').mockReturnValue(of(ORDERS_MOCK));

    fixture.detectChanges();

    expect(component.orders).toEqual(ORDERS_MOCK);
    expect(component.state).toBe('success');
  });

  it('debería pasar las órdenes al componente orders-table', () => {
    jest.spyOn(ordersService, 'getAllOrders').mockReturnValue(of(ORDERS_MOCK));

    fixture.detectChanges();

    const tableComponent = fixture.debugElement
      .query(By.directive(OrdersTableComponent))
      .componentInstance;

    expect(tableComponent.orders).toEqual(ORDERS_MOCK);
  });

  it('debería manejar el error cuando falla el servicio de órdenes', () => {
    component.orders = [];
    const errorResponse = new Error('Fallo de conexión HTTP');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest
      .spyOn(ordersService, 'getAllOrders')
      .mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(ordersService.getAllOrders).toHaveBeenCalledWith(10);
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.state).toBe('error');
    expect(component.orders.length).toBe(0);
  });

  it('debería renderizar la alerta de carga cuando el estado es loading', () => {
    jest.spyOn(ordersService, 'getAllOrders').mockReturnValue(new Observable());

    fixture.detectChanges();

    expect(component.state).toBe('loading');
    const alertElement = fixture.debugElement.query(By.directive(AlertComponent));
    expect(alertElement).toBeTruthy();
    expect(alertElement.componentInstance.text).toBe('Cargando Órdenes...');
  });

  it('debería renderizar la alerta de error cuando el estado es error', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest
      .spyOn(ordersService, 'getAllOrders')
      .mockReturnValue(throwError(() => new Error('Error al conectar')));

    fixture.detectChanges();

    expect(component.state).toBe('error');
    const alertElement = fixture.debugElement.query(By.directive(AlertComponent));
    expect(alertElement).toBeTruthy();
    expect(alertElement.componentInstance.text).toBe('Error al Cargar las Órdenes');
  });
});
