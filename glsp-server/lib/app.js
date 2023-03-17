"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.launch = void 0;
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
const tasklist_diagram_module_1 = require("./diagram/tasklist-diagram-module");
function launch(argv) {
    const options = (0, server_node_1.createSocketCliParser)().parse(argv);
    const appContainer = new inversify_1.Container();
    appContainer.load((0, server_node_1.createAppModule)(options));
    const logger = appContainer.get(server_node_1.LoggerFactory)('TaskListServerApp');
    const launcher = appContainer.resolve(server_node_1.SocketServerLauncher);
    const serverModule = new server_node_1.ServerModule().configureDiagramModule(new tasklist_diagram_module_1.TaskListDiagramModule());
    const errorHandler = (error) => logger.error('Error in workflow server launcher:', error);
    launcher.configure(serverModule);
    (0, server_node_1.resolveAndCatch)(() => launcher.start({ port: options.port, host: options.host }), errorHandler);
}
exports.launch = launch;
//# sourceMappingURL=app.js.map