// package: name.jchein.portfolio.random_art
// file: proto.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as proto_pb from "./proto_pb";

interface IPaintGatewayService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPaintArtworkTasks: IPaintGatewayService_IcreatePaintArtworkTasks;
    createPaintArtworkTask: IPaintGatewayService_IcreatePaintArtworkTask;
    cancelPaintArtworkTasks: IPaintGatewayService_IcancelPaintArtworkTasks;
    cancelPaintArtworkTask: IPaintGatewayService_IcancelPaintArtworkTask;
    reportTaskState: IPaintGatewayService_IreportTaskState;
}

interface IPaintGatewayService_IcreatePaintArtworkTasks extends grpc.MethodDefinition<proto_pb.CreatePaintArtworkTask, proto_pb.CommandReceived> {
    path: string; // "/name.jchein.portfolio.random_art.PaintGateway/createPaintArtworkTasks"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<proto_pb.CreatePaintArtworkTask>;
    requestDeserialize: grpc.deserialize<proto_pb.CreatePaintArtworkTask>;
    responseSerialize: grpc.serialize<proto_pb.CommandReceived>;
    responseDeserialize: grpc.deserialize<proto_pb.CommandReceived>;
}
interface IPaintGatewayService_IcreatePaintArtworkTask extends grpc.MethodDefinition<proto_pb.CreatePaintArtworkTask, proto_pb.CommandReceived> {
    path: string; // "/name.jchein.portfolio.random_art.PaintGateway/createPaintArtworkTask"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<proto_pb.CreatePaintArtworkTask>;
    requestDeserialize: grpc.deserialize<proto_pb.CreatePaintArtworkTask>;
    responseSerialize: grpc.serialize<proto_pb.CommandReceived>;
    responseDeserialize: grpc.deserialize<proto_pb.CommandReceived>;
}
interface IPaintGatewayService_IcancelPaintArtworkTasks extends grpc.MethodDefinition<proto_pb.CancelPaintArtworkTask, proto_pb.CommandReceived> {
    path: string; // "/name.jchein.portfolio.random_art.PaintGateway/cancelPaintArtworkTasks"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<proto_pb.CancelPaintArtworkTask>;
    requestDeserialize: grpc.deserialize<proto_pb.CancelPaintArtworkTask>;
    responseSerialize: grpc.serialize<proto_pb.CommandReceived>;
    responseDeserialize: grpc.deserialize<proto_pb.CommandReceived>;
}
interface IPaintGatewayService_IcancelPaintArtworkTask extends grpc.MethodDefinition<proto_pb.CancelPaintArtworkTask, proto_pb.CommandReceived> {
    path: string; // "/name.jchein.portfolio.random_art.PaintGateway/cancelPaintArtworkTask"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<proto_pb.CancelPaintArtworkTask>;
    requestDeserialize: grpc.deserialize<proto_pb.CancelPaintArtworkTask>;
    responseSerialize: grpc.serialize<proto_pb.CommandReceived>;
    responseDeserialize: grpc.deserialize<proto_pb.CommandReceived>;
}
interface IPaintGatewayService_IreportTaskState extends grpc.MethodDefinition<proto_pb.UpdatePaintArtworkTask, proto_pb.CommandReceived> {
    path: string; // "/name.jchein.portfolio.random_art.PaintGateway/reportTaskState"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<proto_pb.UpdatePaintArtworkTask>;
    requestDeserialize: grpc.deserialize<proto_pb.UpdatePaintArtworkTask>;
    responseSerialize: grpc.serialize<proto_pb.CommandReceived>;
    responseDeserialize: grpc.deserialize<proto_pb.CommandReceived>;
}

export const PaintGatewayService: IPaintGatewayService;

export interface IPaintGatewayServer {
    createPaintArtworkTasks: grpc.handleBidiStreamingCall<proto_pb.CreatePaintArtworkTask, proto_pb.CommandReceived>;
    createPaintArtworkTask: grpc.handleUnaryCall<proto_pb.CreatePaintArtworkTask, proto_pb.CommandReceived>;
    cancelPaintArtworkTasks: grpc.handleBidiStreamingCall<proto_pb.CancelPaintArtworkTask, proto_pb.CommandReceived>;
    cancelPaintArtworkTask: grpc.handleUnaryCall<proto_pb.CancelPaintArtworkTask, proto_pb.CommandReceived>;
    reportTaskState: grpc.handleBidiStreamingCall<proto_pb.UpdatePaintArtworkTask, proto_pb.CommandReceived>;
}

export interface IPaintGatewayClient {
    createPaintArtworkTasks(): grpc.ClientDuplexStream<proto_pb.CreatePaintArtworkTask, proto_pb.CommandReceived>;
    createPaintArtworkTasks(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_pb.CreatePaintArtworkTask, proto_pb.CommandReceived>;
    createPaintArtworkTasks(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_pb.CreatePaintArtworkTask, proto_pb.CommandReceived>;
    createPaintArtworkTask(request: proto_pb.CreatePaintArtworkTask, callback: (error: grpc.ServiceError | null, response: proto_pb.CommandReceived) => void): grpc.ClientUnaryCall;
    createPaintArtworkTask(request: proto_pb.CreatePaintArtworkTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pb.CommandReceived) => void): grpc.ClientUnaryCall;
    createPaintArtworkTask(request: proto_pb.CreatePaintArtworkTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pb.CommandReceived) => void): grpc.ClientUnaryCall;
    cancelPaintArtworkTasks(): grpc.ClientDuplexStream<proto_pb.CancelPaintArtworkTask, proto_pb.CommandReceived>;
    cancelPaintArtworkTasks(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_pb.CancelPaintArtworkTask, proto_pb.CommandReceived>;
    cancelPaintArtworkTasks(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_pb.CancelPaintArtworkTask, proto_pb.CommandReceived>;
    cancelPaintArtworkTask(request: proto_pb.CancelPaintArtworkTask, callback: (error: grpc.ServiceError | null, response: proto_pb.CommandReceived) => void): grpc.ClientUnaryCall;
    cancelPaintArtworkTask(request: proto_pb.CancelPaintArtworkTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pb.CommandReceived) => void): grpc.ClientUnaryCall;
    cancelPaintArtworkTask(request: proto_pb.CancelPaintArtworkTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pb.CommandReceived) => void): grpc.ClientUnaryCall;
    reportTaskState(): grpc.ClientDuplexStream<proto_pb.UpdatePaintArtworkTask, proto_pb.CommandReceived>;
    reportTaskState(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_pb.UpdatePaintArtworkTask, proto_pb.CommandReceived>;
    reportTaskState(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_pb.UpdatePaintArtworkTask, proto_pb.CommandReceived>;
}

export class PaintGatewayClient extends grpc.Client implements IPaintGatewayClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createPaintArtworkTasks(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_pb.CreatePaintArtworkTask, proto_pb.CommandReceived>;
    public createPaintArtworkTasks(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_pb.CreatePaintArtworkTask, proto_pb.CommandReceived>;
    public createPaintArtworkTask(request: proto_pb.CreatePaintArtworkTask, callback: (error: grpc.ServiceError | null, response: proto_pb.CommandReceived) => void): grpc.ClientUnaryCall;
    public createPaintArtworkTask(request: proto_pb.CreatePaintArtworkTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pb.CommandReceived) => void): grpc.ClientUnaryCall;
    public createPaintArtworkTask(request: proto_pb.CreatePaintArtworkTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pb.CommandReceived) => void): grpc.ClientUnaryCall;
    public cancelPaintArtworkTasks(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_pb.CancelPaintArtworkTask, proto_pb.CommandReceived>;
    public cancelPaintArtworkTasks(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_pb.CancelPaintArtworkTask, proto_pb.CommandReceived>;
    public cancelPaintArtworkTask(request: proto_pb.CancelPaintArtworkTask, callback: (error: grpc.ServiceError | null, response: proto_pb.CommandReceived) => void): grpc.ClientUnaryCall;
    public cancelPaintArtworkTask(request: proto_pb.CancelPaintArtworkTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pb.CommandReceived) => void): grpc.ClientUnaryCall;
    public cancelPaintArtworkTask(request: proto_pb.CancelPaintArtworkTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pb.CommandReceived) => void): grpc.ClientUnaryCall;
    public reportTaskState(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_pb.UpdatePaintArtworkTask, proto_pb.CommandReceived>;
    public reportTaskState(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_pb.UpdatePaintArtworkTask, proto_pb.CommandReceived>;
}
