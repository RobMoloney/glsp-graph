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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transition = exports.Task = exports.TaskList = void 0;
const server_node_1 = require("@eclipse-glsp/server-node");
var TaskList;
(function (TaskList) {
    function is(object) {
        return server_node_1.AnyObject.is(object) && (0, server_node_1.hasStringProp)(object, 'id') && (0, server_node_1.hasArrayProp)(object, 'tasks');
    }
    TaskList.is = is;
})(TaskList = exports.TaskList || (exports.TaskList = {}));
var Task;
(function (Task) {
    function is(object) {
        return server_node_1.AnyObject.is(object) && (0, server_node_1.hasStringProp)(object, 'id') && (0, server_node_1.hasStringProp)(object, 'name') && (0, server_node_1.hasObjectProp)(object, 'position');
    }
    Task.is = is;
})(Task = exports.Task || (exports.Task = {}));
var Transition;
(function (Transition) {
    function is(object) {
        return (server_node_1.AnyObject.is(object) &&
            (0, server_node_1.hasStringProp)(object, 'id') &&
            (0, server_node_1.hasStringProp)(object, 'sourceTaskId') &&
            (0, server_node_1.hasStringProp)(object, 'targetTaskId'));
    }
    Transition.is = is;
})(Transition = exports.Transition || (exports.Transition = {}));
//# sourceMappingURL=tasklist-model.js.map