import {WallItem} from './wall_item.js';
/// <reference path="../../lib/three.d.ts" />
/// <reference path="../model/model.ts" />
/// <reference path="wall_item.ts" />
/// <reference path="metadata.ts" />
/** */
export class WallFloorItem extends WallItem
{
	constructor(model, metadata, geometry, material, position, rotation, scale) 
	{
		super(model, metadata, geometry, material, position, rotation, scale);
		this.boundToFloor = true;
	}
}