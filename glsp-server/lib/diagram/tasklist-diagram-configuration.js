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
let TaskListDiagramConfiguration = class TaskListDiagramConfiguration {
    constructor() {
        this.layoutKind = server_node_1.ServerLayoutKind.MANUAL;
        this.needsClientLayout = true;
        this.animatedUpdate = true;
    }
    get typeMapping() {
        return (0, server_node_1.getDefaultMapping)();
    }
    get shapeTypeHints() {
        return [
            {
                elementTypeId: server_node_1.DefaultTypes.NODE,
                deletable: true,
                reparentable: false,
                repositionable: true,
                resizable: true
            }
        ];
    }
    get edgeTypeHints() {
        return [
            {
                elementTypeId: server_node_1.DefaultTypes.EDGE,
                deletable: true,
                repositionable: false,
                routable: false,
                sourceElementTypeIds: [server_node_1.DefaultTypes.NODE],
                targetElementTypeIds: [server_node_1.DefaultTypes.NODE]
            }
        ];
    }
};
TaskListDiagramConfiguration = __decorate([
    (0, inversify_1.injectable)()
], TaskListDiagramConfiguration);
exports.TaskListDiagramConfiguration = TaskListDiagramConfiguration;
//# sourceMappingURL=tasklist-diagram-configuration.js.map