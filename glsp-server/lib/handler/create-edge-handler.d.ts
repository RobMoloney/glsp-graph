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
import { CreateEdgeOperation, CreateOperationHandler } from '@eclipse-glsp/server-node';
import { TaskListModelState } from '../model/tasklist-model-state';
export declare class CreateEdgeHandler extends CreateOperationHandler {
    readonly elementTypeIds: string[];
    protected modelState: TaskListModelState;
    get operationType(): string;
    execute(operation: CreateEdgeOperation): void;
    get label(): string;
}
//# sourceMappingURL=create-edge-handler.d.ts.map