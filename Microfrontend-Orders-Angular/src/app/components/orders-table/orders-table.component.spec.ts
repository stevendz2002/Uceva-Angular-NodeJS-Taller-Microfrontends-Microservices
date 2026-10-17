import { CurrencyPipe, DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ORDERS_MOCK } from '../../mocks/orders.mocks';
import { OrdersTableComponent } from './orders-table.component';

describe('OrdersTableComponent', () => {
  let component: OrdersTableComponent;
  let fixture: ComponentFixture<OrdersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar la estructura de la tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada orden suministrada', () => {
    component.orders = ORDERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(ORDERS_MOCK.length);
  });

  it('debería mostrar los datos correctos de la orden en cada columna', () => {
    component.orders = ORDERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    const currencyPipe = new CurrencyPipe('en-US');
    const datePipe = new DatePipe('en-US');

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const order = component.orders[index];
      const formattedPrice = currencyPipe.transform(order.totalPrice);
      const formattedDate = datePipe.transform(order.createdAt, 'short');

      expect(columns[0].nativeElement.textContent.trim()).toBe(order.id);
      expect(columns[1].nativeElement.textContent.trim()).toBe(order.orderNumber);
      expect(columns[2].nativeElement.textContent.trim()).toBe(order.customerName);
      expect(columns[3].nativeElement.textContent.trim()).toBe(order.productName);
      expect(columns[4].nativeElement.textContent.trim()).toBe(String(order.quantity));
      expect(columns[5].nativeElement.textContent.trim()).toBe(formattedPrice);
      expect(columns[6].nativeElement.textContent.trim()).toBe(order.status);
      expect(columns[7].nativeElement.textContent.trim()).toBe(formattedDate);
    });
  });

  it('debería renderizar el mensaje de estado vacío cuando no existen órdenes', () => {
    component.orders = [];
    fixture.detectChanges();

    const emptyCell = fixture.debugElement.query(By.css('tbody td'));
    expect(emptyCell).toBeTruthy();
    expect(emptyCell.nativeElement.textContent.trim()).toBe('No hay órdenes registradas.');
  });

  it('debería mapear correctamente cada estado a su respectivo BadgeType', () => {
    expect(component.getBadgeType('Pendiente')).toBe('warning');
    expect(component.getBadgeType('En Proceso')).toBe('primary');
    expect(component.getBadgeType('Entregado')).toBe('success');
    expect(component.getBadgeType('Cancelado')).toBe('danger');
    expect(component.getBadgeType('Desconocido')).toBe('secondary');
  });
});
