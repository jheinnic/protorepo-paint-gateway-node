// package: name.jchein.portfolio.services.paint.gateway
// file: proto.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class CreatePaintArtworkTask extends jspb.Message { 
    getSeedprefix(): string;
    setSeedprefix(value: string): void;

    getSeedsuffix(): string;
    setSeedsuffix(value: string): void;

    getNewmodel(): boolean;
    setNewmodel(value: boolean): void;

    getRenderpolicy(): string;
    setRenderpolicy(value: string): void;

    getStoragepolicy(): string;
    setStoragepolicy(value: string): void;

    getAutoack(): boolean;
    setAutoack(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePaintArtworkTask.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePaintArtworkTask): CreatePaintArtworkTask.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePaintArtworkTask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePaintArtworkTask;
    static deserializeBinaryFromReader(message: CreatePaintArtworkTask, reader: jspb.BinaryReader): CreatePaintArtworkTask;
}

export namespace CreatePaintArtworkTask {
    export type AsObject = {
        seedprefix: string,
        seedsuffix: string,
        newmodel: boolean,
        renderpolicy: string,
        storagepolicy: string,
        autoack: boolean,
    }
}

export class MonitorPaintArtworkTask extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getAutoack(): boolean;
    setAutoack(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MonitorPaintArtworkTask.AsObject;
    static toObject(includeInstance: boolean, msg: MonitorPaintArtworkTask): MonitorPaintArtworkTask.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MonitorPaintArtworkTask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MonitorPaintArtworkTask;
    static deserializeBinaryFromReader(message: MonitorPaintArtworkTask, reader: jspb.BinaryReader): MonitorPaintArtworkTask;
}

export namespace MonitorPaintArtworkTask {
    export type AsObject = {
        id: string,
        autoack: boolean,
    }
}

export class CancelPaintArtworkTask extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getAutoack(): boolean;
    setAutoack(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelPaintArtworkTask.AsObject;
    static toObject(includeInstance: boolean, msg: CancelPaintArtworkTask): CancelPaintArtworkTask.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelPaintArtworkTask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelPaintArtworkTask;
    static deserializeBinaryFromReader(message: CancelPaintArtworkTask, reader: jspb.BinaryReader): CancelPaintArtworkTask;
}

export namespace CancelPaintArtworkTask {
    export type AsObject = {
        id: string,
        autoack: boolean,
    }
}

export class AcknowledgePaintArtworkTask extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AcknowledgePaintArtworkTask.AsObject;
    static toObject(includeInstance: boolean, msg: AcknowledgePaintArtworkTask): AcknowledgePaintArtworkTask.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AcknowledgePaintArtworkTask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AcknowledgePaintArtworkTask;
    static deserializeBinaryFromReader(message: AcknowledgePaintArtworkTask, reader: jspb.BinaryReader): AcknowledgePaintArtworkTask;
}

export namespace AcknowledgePaintArtworkTask {
    export type AsObject = {
        id: string,
    }
}

export class RequestReceived extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestReceived.AsObject;
    static toObject(includeInstance: boolean, msg: RequestReceived): RequestReceived.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestReceived, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestReceived;
    static deserializeBinaryFromReader(message: RequestReceived, reader: jspb.BinaryReader): RequestReceived;
}

export namespace RequestReceived {
    export type AsObject = {
        id: string,
    }
}

export class ArtworkTaskProgressEvent extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getTaskstate(): TaskStateType;
    setTaskstate(value: TaskStateType): void;

    getPercentpainted(): number;
    setPercentpainted(value: number): void;

    getMessage(): string;
    setMessage(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArtworkTaskProgressEvent.AsObject;
    static toObject(includeInstance: boolean, msg: ArtworkTaskProgressEvent): ArtworkTaskProgressEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArtworkTaskProgressEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArtworkTaskProgressEvent;
    static deserializeBinaryFromReader(message: ArtworkTaskProgressEvent, reader: jspb.BinaryReader): ArtworkTaskProgressEvent;
}

export namespace ArtworkTaskProgressEvent {
    export type AsObject = {
        id: string,
        taskstate: TaskStateType,
        percentpainted: number,
        message: string,
    }
}

export enum TaskStateType {
    IN_PAINT_QUEUE = 0,
    IN_UPLOAD_QUEUE = 1,
    PAINT_PROGRESS = 2,
    UPLOADING = 3,
    ERROR = 6,
    FINISHED = 7,
    CANCELLED = 8,
    DROPPED = 9,
    CLOSED = 10,
}
