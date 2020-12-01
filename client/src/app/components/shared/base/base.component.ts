import { OnDestroy, Directive } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
export abstract class BaseComponent implements OnDestroy {
  private readonly destroySubject = new Subject();
  public readonly destroy$ = this.destroySubject.asObservable();

  public ngOnDestroy(): void {
    this.destroySubject.next();
  }
}
