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
exports.CreateInputNodeHandler = void 0;
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
const server_node_1 = require("@eclipse-glsp/server-node");
const inversify_1 = require("inversify");
const uuid = require("uuid");
const tasklist_model_state_1 = require("../model/tasklist-model-state");
let CreateInputNodeHandler = class CreateInputNodeHandler extends server_node_1.CreateNodeOperationHandler {
    constructor() {
        super(...arguments);
        this.elementTypeIds = [server_node_1.DefaultTypes.NODE_CIRCLE];
    }
    execute(operation) {
        var _a;
        const relativeLocation = (_a = this.getRelativeLocation(operation)) !== null && _a !== void 0 ? _a : server_node_1.Point.ORIGIN;
        const task = this.createTask(relativeLocation);
        const taskList = this.modelState.taskList;
        taskList.tasks.push(task);
    }
    createTask(position) {
        const nodeCounter = this.modelState.index.getAllByClass(server_node_1.GNode).length;
        return {
            id: uuid.v4(),
            type: 'input',
            name: `NewTaskNode${nodeCounter}`,
            position
        };
    }
    get label() {
        return 'Input';
    }
};
__decorate([
    (0, inversify_1.inject)(tasklist_model_state_1.TaskListModelState),
    __metadata("design:type", tasklist_model_state_1.TaskListModelState)
], CreateInputNodeHandler.prototype, "modelState", void 0);
CreateInputNodeHandler = __decorate([
    (0, inversify_1.injectable)()
], CreateInputNodeHandler);
exports.CreateInputNodeHandler = CreateInputNodeHandler;
//# sourceMappingURL=create-input-node-handler.js.map