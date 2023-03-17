"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskListApplyLabelEditHandler = void 0;
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
const protocol_1 = require("@eclipse-glsp/protocol");
const server_node_1 = require("@eclipse-glsp/server-node");
const inversify_1 = require("inversify");
const tasklist_model_state_1 = require("../model/tasklist-model-state");
let TaskListApplyLabelEditHandler = class TaskListApplyLabelEditHandler {
    constructor() {
        this.operationType = protocol_1.ApplyLabelEditOperation.KIND;
    }
    execute(operation) {
        const index = this.modelState.index;
        // Retrieve the parent node of the label that should be edited
        const taskNode = index.findParentElement(operation.labelId, (0, server_node_1.toTypeGuard)(server_node_1.GNode));
        if (taskNode) {
            const task = index.findTask(taskNode.id);
            if (!task) {
                throw new server_node_1.GLSPServerError(`Could not retrieve the parent task for the label with id ${operation.labelId}`);
            }
            task.name = operation.text;
        }
    }
};
__decorate([
    (0, inversify_1.inject)(tasklist_model_state_1.TaskListModelState),
    __metadata("design:type", tasklist_model_state_1.TaskListModelState)
], TaskListApplyLabelEditHandler.prototype, "modelState", void 0);
TaskListApplyLabelEditHandler = __decorate([
    (0, inversify_1.injectable)()
], TaskListApplyLabelEditHandler);
exports.TaskListApplyLabelEditHandler = TaskListApplyLabelEditHandler;
//# sourceMappingURL=tasklist-apply-label-edit-handler.js.map