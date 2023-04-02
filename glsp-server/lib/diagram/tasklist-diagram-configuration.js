"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskListDiagramConfiguration = void 0;
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
const model_types_1 = require("./util/model-types");
let TaskListDiagramConfiguration = class TaskListDiagramConfiguration {
    constructor() {
        this.layoutKind = server_node_1.ServerLayoutKind.MANUAL;
        this.needsClientLayout = true;
        this.animatedUpdate = true;
    }
    get typeMapping() {
        const mapping = (0, server_node_1.getDefaultMapping)();
        mapping.set(model_types_1.ModelTypes.AND_BLOCK, server_node_1.GNode);
        mapping.set(model_types_1.ModelTypes.ESTOP_BLOCK, server_node_1.GNode);
        mapping.set(model_types_1.ModelTypes.INPUT, server_node_1.GNode);
        mapping.set(model_types_1.ModelTypes.OUTPUT, server_node_1.GNode);
        return mapping;
    }
    get shapeTypeHints() {
        return [
            this.createDefaultShapeTypeHint(model_types_1.ModelTypes.AND_BLOCK),
            this.createDefaultShapeTypeHint(model_types_1.ModelTypes.ESTOP_BLOCK),
            this.createDefaultShapeTypeHint(model_types_1.ModelTypes.INPUT),
            this.createDefaultShapeTypeHint(model_types_1.ModelTypes.OUTPUT),
        ];
    }
    createDefaultShapeTypeHint(elementId) {
        return { elementTypeId: elementId, repositionable: true, deletable: true, resizable: true, reparentable: true };
    }
    get edgeTypeHints() {
        return [
            {
                elementTypeId: server_node_1.DefaultTypes.EDGE,
                deletable: true,
                repositionable: false,
                routable: false,
                sourceElementTypeIds: [model_types_1.ModelTypes.AND_BLOCK,
                    model_types_1.ModelTypes.ESTOP_BLOCK,
                    model_types_1.ModelTypes.INPUT,
                    model_types_1.ModelTypes.OUTPUT],
                targetElementTypeIds: [model_types_1.ModelTypes.AND_BLOCK,
                    model_types_1.ModelTypes.ESTOP_BLOCK,
                    model_types_1.ModelTypes.INPUT,
                    model_types_1.ModelTypes.OUTPUT]
            }
        ];
    }
};
TaskListDiagramConfiguration = __decorate([
    (0, inversify_1.injectable)()
], TaskListDiagramConfiguration);
exports.TaskListDiagramConfiguration = TaskListDiagramConfiguration;
//# sourceMappingURL=tasklist-diagram-configuration.js.map