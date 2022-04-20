/// <reference types="node" />

import { PackParamsPos } from "./packs";

export class PlayerChatEventArgs extends PlayerEventArgs{
    name : string
    /**
     * @description 玩家发言字符串
     */
    msg : string
}

export class PlayerEventArgs{
    /**
     * @description 玩家名字
    */
    name : string
}


export interface EventMap<T = any>{
    "onPlayerJoin": (this: T,event: PlayerEventArgs) => void;
    "onPlayerLeft": (this:T,event:PlayerEventArgs)=>void;
    "onPlayerChat":(this:T,event:PlayerChatEventArgs)=>void;
    "onServerStart":(this:T)=>void;
    "onServerStop" : (this:T,accident:boolean)=>void;
    "onMobDie": (this:T,event:{
        pos: PackParamsPos,
    })=>void;
}