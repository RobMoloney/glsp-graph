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
exports.CreateTransitionHandler = void 0;
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
let CreateTransitionHandler = class CreateTransitionHandler extends server_node_1.CreateOperationHandler {
    constructor() {
        super(...arguments);
        this.elementTypeIds = [server_node_1.DefaultTypes.EDGE];
    }
    get operationType() {
        return server_node_1.CreateEdgeOperation.KIND;
    }
    execute(operation) {
        const transition = {
            id: uuid.v4(),
            sourceTaskId: operation.sourceElementId,
            targetTaskId: operation.targetElementId
        };
        this.modelState.taskList.transitions.push(transition);
    }
    get label() {
        return 'Transition';
    }
};
__decorate([
    (0, inversify_1.inject)(tasklist_model_state_1.TaskListModelState),
    __metadata("design:type", tasklist_model_state_1.TaskListModelState)
], CreateTransitionHandler.prototype, "modelState", void 0);
CreateTransitionHandler = __decorate([
    (0, inversify_1.injectable)()
], CreateTransitionHandler);
exports.CreateTransitionHandler = CreateTransitionHandler;
//# sourceMappingURL=create-transition-handler.js.map