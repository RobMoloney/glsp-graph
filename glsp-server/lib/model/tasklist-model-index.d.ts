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
import { GModelIndex } from '@eclipse-glsp/server-node';
import { Task, TaskList, Transition } from './tasklist-model';
export declare class TaskListModelIndex extends GModelIndex {
    protected idToTaskListElements: Map<string, Task | Transition>;
    indexTaskList(taskList: TaskList): void;
    findTask(id: string): Task | undefined;
    findTransition(id: string): Transition | undefined;
    findTaskOrTransition(id: string): Task | Transition | undefined;
}
//# sourceMappingURL=tasklist-model-index.d.ts.map