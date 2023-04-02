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
import {
    DefaultTypes,
    DiagramConfiguration,
    EdgeTypeHint,
    getDefaultMapping,
    GModelElement,
    GModelElementConstructor,
    ServerLayoutKind,
    ShapeTypeHint,
    GNode,

} from '@eclipse-glsp/server-node';
import { injectable } from 'inversify';
import { ModelTypes as types } from './util/model-types';

@injectable()
export class TaskListDiagramConfiguration implements DiagramConfiguration {
    layoutKind = ServerLayoutKind.MANUAL;
    needsClientLayout = true;
    animatedUpdate = true;

    get typeMapping(): Map<string, GModelElementConstructor<GModelElement>> {
        const mapping = getDefaultMapping();
        mapping.set(types.AND_BLOCK, GNode);
        mapping.set(types.ESTOP_BLOCK, GNode);
        mapping.set(types.INPUT, GNode);
        mapping.set(types.OUTPUT, GNode);

        return mapping;
    }

    get shapeTypeHints(): ShapeTypeHint[] {
        return [
            this.createDefaultShapeTypeHint(types.AND_BLOCK),
            this.createDefaultShapeTypeHint(types.ESTOP_BLOCK),
            this.createDefaultShapeTypeHint(types.INPUT),
            this.createDefaultShapeTypeHint(types.OUTPUT),
        ];
    }

    createDefaultShapeTypeHint(elementId: string): ShapeTypeHint {
        return { elementTypeId: elementId, repositionable: true, deletable: true, resizable: true, reparentable: true };
    }
    

    get edgeTypeHints(): EdgeTypeHint[] {
        return [
            {
                elementTypeId: DefaultTypes.EDGE,
                deletable: true,
                repositionable: false,
                routable: false,
                sourceElementTypeIds: [types.AND_BLOCK,
                    types.ESTOP_BLOCK,
                    types.INPUT,
                    types.OUTPUT],
                targetElementTypeIds: [types.AND_BLOCK,
                    types.ESTOP_BLOCK,
                    types.INPUT,
                    types.OUTPUT]
            }
        ];
    }
}
