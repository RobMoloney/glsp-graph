/********************************************************************************
 * Copyright (c) 2022 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
import { LayoutOperation, GEdge, GNode, MaybePromise, OperationHandler, toTypeGuard,} from '@eclipse-glsp/server-node';
import { inject, injectable } from 'inversify';
import { TaskListModelState } from '../model/tasklist-model-state';

@injectable()
export class LayoutElementsHandler implements OperationHandler {
    readonly operationType = LayoutOperation.KIND;

    @inject(TaskListModelState)
    protected modelState: TaskListModelState;

    execute(operation: LayoutOperation): MaybePromise<void> {
        operation.elementIds.forEach(elementId => this.delete(elementId));
    }

    protected delete(elementId: string): void {
        
        const gModelElement = this.getGModelElementToDelete(elementId);
        console.log(gModelElement);
        
    }

    private getGModelElementToDelete(elementId: string): GNode | GEdge | undefined {
        const index = this.modelState.index;
        const element = index.get(elementId);
        if (element instanceof GNode || element instanceof GEdge) {
            return element;
        }
        return index.findParentElement(elementId, toTypeGuard(GNode)) ?? index.findParentElement(elementId, toTypeGuard(GEdge));
    }
}
