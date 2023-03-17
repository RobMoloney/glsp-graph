"use strict";
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
exports.TaskListChangeBoundsHandler = void 0;
const server_node_1 = require("@eclipse-glsp/server-node");
const inversify_1 = require("inversify");
const tasklist_model_state_1 = require("../model/tasklist-model-state");
let TaskListChangeBoundsHandler = class TaskListChangeBoundsHandler {
    constructor() {
        this.operationType = server_node_1.ChangeBoundsOperation.KIND;
    }
    execute(operation) {
        for (const element of operation.newBounds) {
            this.changeElementBounds(element.elementId, element.newSize, element.newPosition);
        }
    }
    changeElementBounds(elementId, newSize, newPosition) {
        const index = this.modelState.index;
        const taskNode = index.findByClass(elementId, server_node_1.GNode);
        const task = taskNode ? index.findTask(taskNode.id) : undefined;
        if (task) {
            task.size = newSize;
            if (newPosition) {
                task.position = newPosition;
            }
        }
    }
};
__decorate([
    (0, inversify_1.inject)(tasklist_model_state_1.TaskListModelState),
    __metadata("design:type", tasklist_model_state_1.TaskListModelState)
], TaskListChangeBoundsHandler.prototype, "modelState", void 0);
TaskListChangeBoundsHandler = __decorate([
    (0, inversify_1.injectable)()
], TaskListChangeBoundsHandler);
exports.TaskListChangeBoundsHandler = TaskListChangeBoundsHandler;
//# sourceMappingURL=tasklist-change-bounds-handler.js.map