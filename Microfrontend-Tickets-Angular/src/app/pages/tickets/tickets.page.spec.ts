import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { AlertComponent } from '../../components/alert/alert.component';
import { TicketsTableComponent } from '../../components/tickets-table/tickets-table.component';
import { TICKETS_MOCK } from '../../mocks/tickets.mocks';
import { TicketsService } from '../../services/tickets/tickets.service';
import { TicketsPage } from './tickets.page';

describe('TicketsPage', () => {
  let component: TicketsPage;
  let fixture: ComponentFixture<TicketsPage>;
  let ticketsService: TicketsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketsPage, TicketsTableComponent, AlertComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(TicketsPage);
    component = fixture.componentInstance;
    ticketsService = TestBed.inject(TicketsService);
  });

  it('debería crear el componente correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllTickets al inicializar el componente', () => {
    const spy = jest.spyOn(ticketsService, 'getAllTickets').mockReturnValue(of(TICKETS_MOCK));
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('debería asignar los tickets recibidos y cambiar el estado a "success"', () => {
    jest.spyOn(ticketsService, 'getAllTickets').mockReturnValue(of(TICKETS_MOCK));
    fixture.detectChanges();

    expect(component.tickets).toEqual(TICKETS_MOCK);
    expect(component.state).toBe('success');
  });

  it('debería renderizar la tabla tickets-table y transferir los datos en estado "success"', () => {
    jest.spyOn(ticketsService, 'getAllTickets').mockReturnValue(of(TICKETS_MOCK));
    fixture.detectChanges();

    const tableComponent = fixture.debugElement
      .query(By.directive(TicketsTableComponent))
      .componentInstance as TicketsTableComponent;

    expect(tableComponent.tickets).toEqual(TICKETS_MOCK);
  });

  it('debería manejar el error, registrar en consola y cambiar el estado a "error"', () => {
    const errorResponse = new Error('Fallo de red en microservicio');
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(ticketsService, 'getAllTickets').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(ticketsService.getAllTickets).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.state).toBe('error');
    expect(component.tickets.length).toBe(0);
  });

  it('debería renderizar la alerta de carga cuando el estado es "loading"', () => {
    jest.spyOn(ticketsService, 'getAllTickets').mockReturnValue(of(TICKETS_MOCK));
    fixture.detectChanges(); // Ejecuta ngOnInit
    component.state = 'loading';
    fixture.detectChanges();

    const alertElement = fixture.debugElement.query(By.directive(AlertComponent));
    expect(alertElement).toBeTruthy();
    expect(alertElement.componentInstance.alertState).toBe('loading');
  });

  it('debería renderizar la alerta de error cuando el estado es "error"', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(ticketsService, 'getAllTickets').mockReturnValue(throwError(() => new Error('Error')));
    fixture.detectChanges(); // ngOnInit pasa a state = 'error'

    const alertElement = fixture.debugElement.query(By.directive(AlertComponent));
    expect(alertElement).toBeTruthy();
    expect(alertElement.componentInstance.alertState).toBe('error');
  });
});
