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
exports.LayoutElementsHandler = void 0;
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
const tasklist_model_state_1 = require("../model/tasklist-model-state");
let LayoutElementsHandler = class LayoutElementsHandler {
    constructor() {
        this.operationType = server_node_1.LayoutOperation.KIND;
    }
    execute(operation) {
        operation.elementIds.forEach(elementId => this.delete(elementId));
    }
    delete(elementId) {
        const gModelElement = this.getGModelElementToDelete(elementId);
        console.log(gModelElement);
    }
    getGModelElementToDelete(elementId) {
        var _a;
        const index = this.modelState.index;
        const element = index.get(elementId);
        if (element instanceof server_node_1.GNode || element instanceof server_node_1.GEdge) {
            return element;
        }
        return (_a = index.findParentElement(elementId, (0, server_node_1.toTypeGuard)(server_node_1.GNode))) !== null && _a !== void 0 ? _a : index.findParentElement(elementId, (0, server_node_1.toTypeGuard)(server_node_1.GEdge));
    }
};
__decorate([
    (0, inversify_1.inject)(tasklist_model_state_1.TaskListModelState),
    __metadata("design:type", tasklist_model_state_1.TaskListModelState)
], LayoutElementsHandler.prototype, "modelState", void 0);
LayoutElementsHandler = __decorate([
    (0, inversify_1.injectable)()
], LayoutElementsHandler);
exports.LayoutElementsHandler = LayoutElementsHandler;
//# sourceMappingURL=layout-elements-handler.js.map