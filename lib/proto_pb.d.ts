// package: name.jchein.portfolio.random_art
// file: proto.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class CreatePaintArtworkTask extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getSeedprefix(): string;
    setSeedprefix(value: string): void;

    getSeedsuffix(): string;
    setSeedsuffix(value: string): void;

    getNewmodel(): boolean;
    setNewmodel(value: boolean): void;

    getRenderpolicy(): string;
    setRenderpolicy(value: string): void;

    getStagingpolicy(): string;
    setStagingpolicy(value: string): void;


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
        id: string,
        seedprefix: string,
        seedsuffix: string,
        newmodel: boolean,
        renderpolicy: string,
        stagingpolicy: string,
    }
}

export class CancelPaintArtworkTask extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getSeq(): number;
    setSeq(value: number): void;


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
        seq: number,
    }
}

export class SuspendPaintArtworkTask extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getSeq(): number;
    setSeq(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuspendPaintArtworkTask.AsObject;
    static toObject(includeInstance: boolean, msg: SuspendPaintArtworkTask): SuspendPaintArtworkTask.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuspendPaintArtworkTask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuspendPaintArtworkTask;
    static deserializeBinaryFromReader(message: SuspendPaintArtworkTask, reader: jspb.BinaryReader): SuspendPaintArtworkTask;
}

export namespace SuspendPaintArtworkTask {
    export type AsObject = {
        id: string,
        seq: number,
    }
}

export class ResumePaintArtworkTask extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getSeq(): number;
    setSeq(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResumePaintArtworkTask.AsObject;
    static toObject(includeInstance: boolean, msg: ResumePaintArtworkTask): ResumePaintArtworkTask.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResumePaintArtworkTask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResumePaintArtworkTask;
    static deserializeBinaryFromReader(message: ResumePaintArtworkTask, reader: jspb.BinaryReader): ResumePaintArtworkTask;
}

export namespace ResumePaintArtworkTask {
    export type AsObject = {
        id: string,
        seq: number,
    }
}

export class RetryPaintArtworkTask extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getSeq(): number;
    setSeq(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RetryPaintArtworkTask.AsObject;
    static toObject(includeInstance: boolean, msg: RetryPaintArtworkTask): RetryPaintArtworkTask.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RetryPaintArtworkTask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RetryPaintArtworkTask;
    static deserializeBinaryFromReader(message: RetryPaintArtworkTask, reader: jspb.BinaryReader): RetryPaintArtworkTask;
}

export namespace RetryPaintArtworkTask {
    export type AsObject = {
        id: string,
        seq: number,
    }
}

export class AcknowledgePaintArtworkTask extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getSeq(): number;
    setSeq(value: number): void;


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
        seq: number,
    }
}

export class CommandReceived extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getSeq(): number;
    setSeq(value: number): void;

    getType(): string;
    setType(value: string): void;

    getAccepted(): boolean;
    setAccepted(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommandReceived.AsObject;
    static toObject(includeInstance: boolean, msg: CommandReceived): CommandReceived.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommandReceived, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommandReceived;
    static deserializeBinaryFromReader(message: CommandReceived, reader: jspb.BinaryReader): CommandReceived;
}

export namespace CommandReceived {
    export type AsObject = {
        id: string,
        seq: number,
        type: string,
        accepted: boolean,
    }
}

export class PercentDoneUpdate extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): void;

    getPercentdone(): number;
    setPercentdone(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PercentDoneUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: PercentDoneUpdate): PercentDoneUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PercentDoneUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PercentDoneUpdate;
    static deserializeBinaryFromReader(message: PercentDoneUpdate, reader: jspb.BinaryReader): PercentDoneUpdate;
}

export namespace PercentDoneUpdate {
    export type AsObject = {
        message: string,
        percentdone: number,
    }
}

export class InformationUpdate extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InformationUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: InformationUpdate): InformationUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InformationUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InformationUpdate;
    static deserializeBinaryFromReader(message: InformationUpdate, reader: jspb.BinaryReader): InformationUpdate;
}

export namespace InformationUpdate {
    export type AsObject = {
        message: string,
    }
}

export class RetryableErrorUpdate extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): void;

    getRetryin(): number;
    setRetryin(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RetryableErrorUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: RetryableErrorUpdate): RetryableErrorUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RetryableErrorUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RetryableErrorUpdate;
    static deserializeBinaryFromReader(message: RetryableErrorUpdate, reader: jspb.BinaryReader): RetryableErrorUpdate;
}

export namespace RetryableErrorUpdate {
    export type AsObject = {
        message: string,
        retryin: number,
    }
}

export class UpdatePaintArtworkTask extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getSeq(): number;
    setSeq(value: number): void;

    getUpdatetype(): UpdateType;
    setUpdatetype(value: UpdateType): void;


    hasPercentdonebody(): boolean;
    clearPercentdonebody(): void;
    getPercentdonebody(): PercentDoneUpdate | undefined;
    setPercentdonebody(value?: PercentDoneUpdate): void;


    hasInformationbody(): boolean;
    clearInformationbody(): void;
    getInformationbody(): InformationUpdate | undefined;
    setInformationbody(value?: InformationUpdate): void;


    hasRetryerrorbody(): boolean;
    clearRetryerrorbody(): void;
    getRetryerrorbody(): RetryableErrorUpdate | undefined;
    setRetryerrorbody(value?: RetryableErrorUpdate): void;


    getUpdateBodyCase(): UpdatePaintArtworkTask.UpdateBodyCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePaintArtworkTask.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePaintArtworkTask): UpdatePaintArtworkTask.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePaintArtworkTask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePaintArtworkTask;
    static deserializeBinaryFromReader(message: UpdatePaintArtworkTask, reader: jspb.BinaryReader): UpdatePaintArtworkTask;
}

export namespace UpdatePaintArtworkTask {
    export type AsObject = {
        id: string,
        seq: number,
        updatetype: UpdateType,
        percentdonebody?: PercentDoneUpdate.AsObject,
        informationbody?: InformationUpdate.AsObject,
        retryerrorbody?: RetryableErrorUpdate.AsObject,
    }

    export enum UpdateBodyCase {
        UPDATEBODY_NOT_SET = 0,
    
    PERCENTDONEBODY = 13,

    INFORMATIONBODY = 14,

    RETRYERRORBODY = 15,

    }

}

export enum UpdateType {
    IN_PAINT_QUEUE = 0,
    IN_UPLOAD_QUEUE = 1,
    PAINT_PROGRESS = 2,
    UPLOADING = 3,
    PAUSED = 4,
    SOFT_ERROR = 5,
    FATAL_ERROR = 6,
    FINISHED = 7,
    CANCELLED = 8,
    DROPPED = 9,
    CLOSED = 10,
}
