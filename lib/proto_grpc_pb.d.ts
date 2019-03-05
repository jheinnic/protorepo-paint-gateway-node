// package: name.jchein.portfolio.services.paint.gateway
// file: proto.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as proto_pb from "./proto_pb";

interface IPaintGatewayService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IPaintGatewayService_Icreate;
    createAndMonitor: IPaintGatewayService_IcreateAndMonitor;
    monitor: IPaintGatewayService_Imonitor;
    acknowledge: IPaintGatewayService_Iacknowledge;
    cancel: IPaintGatewayService_Icancel;
}

interface IPaintGatewayService_Icreate extends grpc.MethodDefinition<proto_pb.CreatePaintArtworkTask, proto_pb.RequestReceived> {
    path: string; // "/name.jchein.portfolio.services.paint.gateway.PaintGateway/create"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<proto_pb.CreatePaintArtworkTask>;
    requestDeserialize: grpc.deserialize<proto_pb.CreatePaintArtworkTask>;
    responseSerialize: grpc.serialize<proto_pb.RequestReceived>;
    responseDeserialize: grpc.deserialize<proto_pb.RequestReceived>;
}
interface IPaintGatewayService_IcreateAndMonitor extends grpc.MethodDefinition<proto_pb.CreatePaintArtworkTask, proto_pb.ArtworkTaskProgressEvent> {
    path: string; // "/name.jchein.portfolio.services.paint.gateway.PaintGateway/createAndMonitor"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<proto_pb.CreatePaintArtworkTask>;
    requestDeserialize: grpc.deserialize<proto_pb.CreatePaintArtworkTask>;
    responseSerialize: grpc.serialize<proto_pb.ArtworkTaskProgressEvent>;
    responseDeserialize: grpc.deserialize<proto_pb.ArtworkTaskProgressEvent>;
}
interface IPaintGatewayService_Imonitor extends grpc.MethodDefinition<proto_pb.MonitorPaintArtworkTask, proto_pb.ArtworkTaskProgressEvent> {
    path: string; // "/name.jchein.portfolio.services.paint.gateway.PaintGateway/monitor"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<proto_pb.MonitorPaintArtworkTask>;
    requestDeserialize: grpc.deserialize<proto_pb.MonitorPaintArtworkTask>;
    responseSerialize: grpc.serialize<proto_pb.ArtworkTaskProgressEvent>;
    responseDeserialize: grpc.deserialize<proto_pb.ArtworkTaskProgressEvent>;
}
interface IPaintGatewayService_Iacknowledge extends grpc.MethodDefinition<proto_pb.CancelPaintArtworkTask, proto_pb.RequestReceived> {
    path: string; // "/name.jchein.portfolio.services.paint.gateway.PaintGateway/acknowledge"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<proto_pb.CancelPaintArtworkTask>;
    requestDeserialize: grpc.deserialize<proto_pb.CancelPaintArtworkTask>;
    responseSerialize: grpc.serialize<proto_pb.RequestReceived>;
    responseDeserialize: grpc.deserialize<proto_pb.RequestReceived>;
}
interface IPaintGatewayService_Icancel extends grpc.MethodDefinition<proto_pb.CancelPaintArtworkTask, proto_pb.RequestReceived> {
    path: string; // "/name.jchein.portfolio.services.paint.gateway.PaintGateway/cancel"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<proto_pb.CancelPaintArtworkTask>;
    requestDeserialize: grpc.deserialize<proto_pb.CancelPaintArtworkTask>;
    responseSerialize: grpc.serialize<proto_pb.RequestReceived>;
    responseDeserialize: grpc.deserialize<proto_pb.RequestReceived>;
}

export const PaintGatewayService: IPaintGatewayService;

export interface IPaintGatewayServer {
    create: grpc.handleUnaryCall<proto_pb.CreatePaintArtworkTask, proto_pb.RequestReceived>;
    createAndMonitor: grpc.handleServerStreamingCall<proto_pb.CreatePaintArtworkTask, proto_pb.ArtworkTaskProgressEvent>;
    monitor: grpc.handleServerStreamingCall<proto_pb.MonitorPaintArtworkTask, proto_pb.ArtworkTaskProgressEvent>;
    acknowledge: grpc.handleUnaryCall<proto_pb.CancelPaintArtworkTask, proto_pb.RequestReceived>;
    cancel: grpc.handleUnaryCall<proto_pb.CancelPaintArtworkTask, proto_pb.RequestReceived>;
}

export interface IPaintGatewayClient {
    create(request: proto_pb.CreatePaintArtworkTask, callback: (error: grpc.ServiceError | null, response: proto_pb.RequestReceived) => void): grpc.ClientUnaryCall;
    create(request: proto_pb.CreatePaintArtworkTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pb.RequestReceived) => void): grpc.ClientUnaryCall;
    create(request: proto_pb.CreatePaintArtworkTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pb.RequestReceived) => void): grpc.ClientUnaryCall;
    createAndMonitor(request: proto_pb.CreatePaintArtworkTask, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_pb.ArtworkTaskProgressEvent>;
    createAndMonitor(request: proto_pb.CreatePaintArtworkTask, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_pb.ArtworkTaskProgressEvent>;
    monitor(request: proto_pb.MonitorPaintArtworkTask, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_pb.ArtworkTaskProgressEvent>;
    monitor(request: proto_pb.MonitorPaintArtworkTask, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_pb.ArtworkTaskProgressEvent>;
    acknowledge(request: proto_pb.CancelPaintArtworkTask, callback: (error: grpc.ServiceError | null, response: proto_pb.RequestReceived) => void): grpc.ClientUnaryCall;
    acknowledge(request: proto_pb.CancelPaintArtworkTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pb.RequestReceived) => void): grpc.ClientUnaryCall;
    acknowledge(request: proto_pb.CancelPaintArtworkTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pb.RequestReceived) => void): grpc.ClientUnaryCall;
    cancel(request: proto_pb.CancelPaintArtworkTask, callback: (error: grpc.ServiceError | null, response: proto_pb.RequestReceived) => void): grpc.ClientUnaryCall;
    cancel(request: proto_pb.CancelPaintArtworkTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pb.RequestReceived) => void): grpc.ClientUnaryCall;
    cancel(request: proto_pb.CancelPaintArtworkTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pb.RequestReceived) => void): grpc.ClientUnaryCall;
}

export class PaintGatewayClient extends grpc.Client implements IPaintGatewayClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: proto_pb.CreatePaintArtworkTask, callback: (error: grpc.ServiceError | null, response: proto_pb.RequestReceived) => void): grpc.ClientUnaryCall;
    public create(request: proto_pb.CreatePaintArtworkTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pb.RequestReceived) => void): grpc.ClientUnaryCall;
    public create(request: proto_pb.CreatePaintArtworkTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pb.RequestReceived) => void): grpc.ClientUnaryCall;
    public createAndMonitor(request: proto_pb.CreatePaintArtworkTask, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_pb.ArtworkTaskProgressEvent>;
    public createAndMonitor(request: proto_pb.CreatePaintArtworkTask, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_pb.ArtworkTaskProgressEvent>;
    public monitor(request: proto_pb.MonitorPaintArtworkTask, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_pb.ArtworkTaskProgressEvent>;
    public monitor(request: proto_pb.MonitorPaintArtworkTask, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_pb.ArtworkTaskProgressEvent>;
    public acknowledge(request: proto_pb.CancelPaintArtworkTask, callback: (error: grpc.ServiceError | null, response: proto_pb.RequestReceived) => void): grpc.ClientUnaryCall;
    public acknowledge(request: proto_pb.CancelPaintArtworkTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pb.RequestReceived) => void): grpc.ClientUnaryCall;
    public acknowledge(request: proto_pb.CancelPaintArtworkTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pb.RequestReceived) => void): grpc.ClientUnaryCall;
    public cancel(request: proto_pb.CancelPaintArtworkTask, callback: (error: grpc.ServiceError | null, response: proto_pb.RequestReceived) => void): grpc.ClientUnaryCall;
    public cancel(request: proto_pb.CancelPaintArtworkTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pb.RequestReceived) => void): grpc.ClientUnaryCall;
    public cancel(request: proto_pb.CancelPaintArtworkTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pb.RequestReceived) => void): grpc.ClientUnaryCall;
}
