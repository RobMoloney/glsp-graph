"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskListDiagramModule = void 0;
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
const create_task_node_handler_1 = require("../handler/create-task-node-handler");
const create_input_node_handler_1 = require("../handler/create-input-node-handler");
const create_output_node_handler_1 = require("../handler/create-output-node-handler");
const create_and_node_handler_1 = require("../handler/create-and-node-handler");
const create_edge_handler_1 = require("../handler/create-edge-handler");
const create_transition_handler_1 = require("../handler/create-transition-handler");
const delete_element_handler_1 = require("../handler/delete-element-handler");
const tasklist_apply_label_edit_handler_1 = require("../handler/tasklist-apply-label-edit-handler");
const tasklist_change_bounds_handler_1 = require("../handler/tasklist-change-bounds-handler");
const tasklist_label_edit_validator_1 = require("../handler/tasklist-label-edit-validator");
const tasklist_gmodel_factory_1 = require("../model/tasklist-gmodel-factory");
const tasklist_model_index_1 = require("../model/tasklist-model-index");
const tasklist_model_state_1 = require("../model/tasklist-model-state");
const tasklist_storage_1 = require("../model/tasklist-storage");
const tasklist_diagram_configuration_1 = require("./tasklist-diagram-configuration");
let TaskListDiagramModule = class TaskListDiagramModule extends server_node_1.DiagramModule {
    constructor() {
        super(...arguments);
        this.diagramType = 'tasklist-diagram';
    }
    bindDiagramConfiguration() {
        return tasklist_diagram_configuration_1.TaskListDiagramConfiguration;
    }
    bindSourceModelStorage() {
        return tasklist_storage_1.TaskListStorage;
    }
    bindModelState() {
        return { service: tasklist_model_state_1.TaskListModelState };
    }
    bindGModelFactory() {
        return tasklist_gmodel_factory_1.TaskListGModelFactory;
    }
    configureActionHandlers(binding) {
        super.configureActionHandlers(binding);
        binding.add(server_node_1.ComputedBoundsActionHandler);
    }
    configureOperationHandlers(binding) {
        super.configureOperationHandlers(binding);
        binding.add(create_task_node_handler_1.CreateTaskHandler);
        binding.add(create_and_node_handler_1.CreateAndNodeHandler);
        binding.add(create_input_node_handler_1.CreateInputNodeHandler);
        binding.add(create_output_node_handler_1.CreateOutputNodeHandler);
        binding.add(create_edge_handler_1.CreateEdgeHandler);
        binding.add(create_transition_handler_1.CreateTransitionHandler);
        binding.add(tasklist_change_bounds_handler_1.TaskListChangeBoundsHandler);
        binding.add(tasklist_apply_label_edit_handler_1.TaskListApplyLabelEditHandler);
        binding.add(delete_element_handler_1.DeleteElementHandler);
        binding.add(server_node_1.LayoutOperationHandler);
    }
    bindGModelIndex() {
        this.context.bind(tasklist_model_index_1.TaskListModelIndex).toSelf().inSingletonScope();
        return { service: tasklist_model_index_1.TaskListModelIndex };
    }
    bindLabelEditValidator() {
        return tasklist_label_edit_validator_1.TaskListLabelEditValidator;
    }
};
TaskListDiagramModule = __decorate([
    (0, inversify_1.injectable)()
], TaskListDiagramModule);
exports.TaskListDiagramModule = TaskListDiagramModule;
//# sourceMappingURL=tasklist-diagram-module.js.map