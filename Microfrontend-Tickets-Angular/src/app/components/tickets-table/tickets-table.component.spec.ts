import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TICKETS_MOCK } from '../../mocks/tickets.mocks';
import { TicketsTableComponent } from './tickets-table.component';

describe('TicketsTableComponent', () => {
  let component: TicketsTableComponent;
  let fixture: ComponentFixture<TicketsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TicketsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar la tabla en el DOM', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar cero filas cuando la lista de tickets está vacía', () => {
    component.tickets = [];
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(0);
  });

  it('debería renderizar una fila por cada ticket suministrado', () => {
    component.tickets = TICKETS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(TICKETS_MOCK.length);
  });

  it('debería mostrar los datos correctos de cada ticket en sus columnas', () => {
    component.tickets = TICKETS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const ticket = component.tickets[index];
      const codeCell = row.query(By.css('th[scope="row"]')).nativeElement.textContent.trim();
      const cells = row.queryAll(By.css('td'));

      expect(codeCell).toBe(ticket.ticketCode);
      expect(cells[0].nativeElement.textContent.trim()).toBe(ticket.subject);
      expect(cells[1].nativeElement.textContent.trim()).toBe(ticket.requesterEmail);
      expect(cells[2].nativeElement.textContent.trim()).toBe(ticket.department);
    });
  });

  it('debería retornar el BadgeType correcto para cada nivel de prioridad', () => {
    expect(component.getPriorityBadge('Baja')).toBe('info');
    expect(component.getPriorityBadge('Media')).toBe('primary');
    expect(component.getPriorityBadge('Alta')).toBe('warning');
    expect(component.getPriorityBadge('Crítica')).toBe('danger');
  });

  it('debería retornar el fallback "primary" si la prioridad no está en el mapa', () => {
    expect(component.getPriorityBadge('Desconocida')).toBe('primary');
  });

  it('debería retornar el BadgeType correcto para cada estado del ticket', () => {
    expect(component.getStatusBadge('Abierto')).toBe('primary');
    expect(component.getStatusBadge('En Proceso')).toBe('warning');
    expect(component.getStatusBadge('Resuelto')).toBe('success');
    expect(component.getStatusBadge('Cerrado')).toBe('secondary');
  });

  it('debería retornar el fallback "secondary" si el estado no está en el mapa', () => {
    expect(component.getStatusBadge('Cancelado')).toBe('secondary');
  });
});
