import { Component, OnDestroy, OnInit } from '@angular/core';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { Subject, takeUntil } from 'rxjs';
import { BoxOfficeRevenueType } from '../models/financial/box-office-revenue-type';
import { EmployeesType } from '../models/northwind/employees-type';
import { FinancialService } from '../services/financial.service';
import { NorthwindService } from '../services/northwind.service';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-all-components',
  templateUrl: './all-components.component.html',
  styleUrls: ['./all-components.component.scss']
})
export class AllComponentsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public checked: boolean = true;
  public value: number = 0;
  public value1: number = 4;
  public value2: string = '2';
  public financialBoxOfficeRevenue: BoxOfficeRevenueType[] = [];
  public northwindEmployees: EmployeesType[] = [];

  constructor(
    private financialService: FinancialService,
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.financialService.getData('BoxOfficeRevenueType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.financialBoxOfficeRevenue = data,
      error: (_err: any) => this.financialBoxOfficeRevenue = []
    });
    this.northwindService.getData('EmployeesType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindEmployees = data,
      error: (_err: any) => this.northwindEmployees = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
