var serverCommands = new binary.Array([new binary.Dynamic({
    sendPlayer: new binary.Object({
        id: new binary.Number("uShort"),
        pos: new binary.Object({
            x: new binary.Number("float"),
            y: new binary.Number("float"),
            z: new binary.Number("float")
        }),
        vel: new binary.Object({
            x: new binary.Number("float"),
            y: new binary.Number("float"),
            z: new binary.Number("float")
        }),
        controls: new binary.Object({
            horizontal: new binary.Number("sByte"),
            vertical: new binary.Number("sByte")
        })
    }),
    removePlayer: new binary.Number("uShort")
})], "short");

var clientCommands = new binary.Array([new binary.Dynamic({
    
})], "short");