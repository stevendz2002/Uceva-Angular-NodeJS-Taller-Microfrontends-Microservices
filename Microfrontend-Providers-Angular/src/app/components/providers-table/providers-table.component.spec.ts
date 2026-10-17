import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PROVIDERS_MOCK } from '../../mocks/providers.mocks';
import { ProvidersTableComponent } from './providers-table.component';

describe('ProvidersTableComponent', () => {
  let component: ProvidersTableComponent;
  let fixture: ComponentFixture<ProvidersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvidersTableComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProvidersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería instanciar el componente correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar el elemento <table>', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada proveedor suministrado', () => {
    component.providers = PROVIDERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr:not(.empty-row)'));
    expect(rows.length).toBe(PROVIDERS_MOCK.length);
  });

  it('debería mostrar los datos correctos en cada columna de la fila', () => {
    component.providers = PROVIDERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr:not(.empty-row)'));

    rows.forEach((row, index) => {
      const provider = PROVIDERS_MOCK[index];
      const th = row.query(By.css('th')).nativeElement.textContent.trim();
      const tds = row.queryAll(By.css('td')).map(td => td.nativeElement.textContent.trim());

      expect(th).toBe(provider.id);
      expect(tds[0]).toBe(provider.name);
      expect(tds[1]).toBe(provider.nit);
      expect(tds[2]).toBe(provider.email);
      expect(tds[3]).toBe(provider.phone);
      expect(tds[4]).toBe(provider.city);
      expect(tds[5]).toContain(provider.category);
    });
  });

  it('debería mapear correctamente cada categoría comercial a su BadgeType', () => {
    expect(component.categoryMap['Tecnología']).toBe('primary');
    expect(component.categoryMap['Logística']).toBe('info');
    expect(component.categoryMap['Alimentos']).toBe('success');
    expect(component.categoryMap['Servicios']).toBe('warning');
    expect(component.categoryMap['Mobiliario']).toBe('secondary');
  });

  it('debería retornar el BadgeType configurado mediante getBadgeType()', () => {
    expect(component.getBadgeType('Tecnología')).toBe('primary');
    expect(component.getBadgeType('Logística')).toBe('info');
    expect(component.getBadgeType('Alimentos')).toBe('success');
  });

  it('debería retornar "primary" por defecto en getBadgeType() para categorías no mapeadas', () => {
    expect(component.getBadgeType('Otra Categoria Inexistente')).toBe('primary');
  });

  it('debería mostrar el mensaje de estado vacío cuando la lista de proveedores es vacía', () => {
    component.providers = [];
    fixture.detectChanges();

    const emptyRow = fixture.debugElement.query(By.css('.empty-row'));
    expect(emptyRow).toBeTruthy();
    expect(emptyRow.nativeElement.textContent).toContain('No se encontraron proveedores registrados.');
  });
});
