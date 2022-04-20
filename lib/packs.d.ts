/// <reference types="node" />

export class PackBase {
    /**
     * @description  包类型
     */
    type: string
    cause: string
    action: string
    /**
     * @description 参数
     */
    params: PackParams
}

export class PackParams {
    /**
     * @description 数据包ID
     */
    id: string
    /**
     * @description  需要执行的命令
     */
    cmd: string
    /**
     * @description  触发事件的玩家名称
     */
    sender: string
    /**
     * @description  玩家IP
     */
    ip: string
    /**
     * @description  玩家XUID
     */
    xuid: string
    /**
     * @description  玩家发言
     */
    text: string
    /**
     * @description  生物位置
     */
    pos: PackParamsPos
    /**
     * @description 实体类型
     */
    mobtype: string
    /**
     * @description  实体名称
     */
    mobname: string
    /**
     * @description  伤害源ID
     */
    dmcase: number
    /**
     * @description  伤害类型
     */
    dmname: string
    /**
     * @description  伤害源类型
     */
    srctype: number
    /**
     * @description  伤害源名称
     */
    srcname: string
}

export class PackParamsPos {
    x: number
    y: number
    z: number
}