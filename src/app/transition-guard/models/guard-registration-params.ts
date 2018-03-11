import { Observable } from 'rxjs/Observable';

export interface GuardRegistrationParams {
    dataChangesObserver: Observable<boolean>;
    useCancelSaveDiscardModal: boolean;
    onSave: () => Observable<boolean>;
    onDiscard?: () => Observable<boolean>;
    onCancel?: () => Observable<boolean>;
}
