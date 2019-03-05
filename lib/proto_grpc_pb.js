// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_pb = require('./proto_pb.js');

function serialize_name_jchein_portfolio_services_paint_gateway_ArtworkTaskProgressEvent(arg) {
  if (!(arg instanceof proto_pb.ArtworkTaskProgressEvent)) {
    throw new Error('Expected argument of type name.jchein.portfolio.services.paint.gateway.ArtworkTaskProgressEvent');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_name_jchein_portfolio_services_paint_gateway_ArtworkTaskProgressEvent(buffer_arg) {
  return proto_pb.ArtworkTaskProgressEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_name_jchein_portfolio_services_paint_gateway_CancelPaintArtworkTask(arg) {
  if (!(arg instanceof proto_pb.CancelPaintArtworkTask)) {
    throw new Error('Expected argument of type name.jchein.portfolio.services.paint.gateway.CancelPaintArtworkTask');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_name_jchein_portfolio_services_paint_gateway_CancelPaintArtworkTask(buffer_arg) {
  return proto_pb.CancelPaintArtworkTask.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_name_jchein_portfolio_services_paint_gateway_CreatePaintArtworkTask(arg) {
  if (!(arg instanceof proto_pb.CreatePaintArtworkTask)) {
    throw new Error('Expected argument of type name.jchein.portfolio.services.paint.gateway.CreatePaintArtworkTask');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_name_jchein_portfolio_services_paint_gateway_CreatePaintArtworkTask(buffer_arg) {
  return proto_pb.CreatePaintArtworkTask.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_name_jchein_portfolio_services_paint_gateway_MonitorPaintArtworkTask(arg) {
  if (!(arg instanceof proto_pb.MonitorPaintArtworkTask)) {
    throw new Error('Expected argument of type name.jchein.portfolio.services.paint.gateway.MonitorPaintArtworkTask');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_name_jchein_portfolio_services_paint_gateway_MonitorPaintArtworkTask(buffer_arg) {
  return proto_pb.MonitorPaintArtworkTask.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_name_jchein_portfolio_services_paint_gateway_RequestReceived(arg) {
  if (!(arg instanceof proto_pb.RequestReceived)) {
    throw new Error('Expected argument of type name.jchein.portfolio.services.paint.gateway.RequestReceived');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_name_jchein_portfolio_services_paint_gateway_RequestReceived(buffer_arg) {
  return proto_pb.RequestReceived.deserializeBinary(new Uint8Array(buffer_arg));
}


// import "name/jchein/portfolio/common/grpc/action/actions.proto";
//
// Incoming paint task queue.
var PaintGatewayService = exports.PaintGatewayService = {
  create: {
    path: '/name.jchein.portfolio.services.paint.gateway.PaintGateway/create',
    requestStream: false,
    responseStream: false,
    requestType: proto_pb.CreatePaintArtworkTask,
    responseType: proto_pb.RequestReceived,
    requestSerialize: serialize_name_jchein_portfolio_services_paint_gateway_CreatePaintArtworkTask,
    requestDeserialize: deserialize_name_jchein_portfolio_services_paint_gateway_CreatePaintArtworkTask,
    responseSerialize: serialize_name_jchein_portfolio_services_paint_gateway_RequestReceived,
    responseDeserialize: deserialize_name_jchein_portfolio_services_paint_gateway_RequestReceived,
  },
  createAndMonitor: {
    path: '/name.jchein.portfolio.services.paint.gateway.PaintGateway/createAndMonitor',
    requestStream: false,
    responseStream: true,
    requestType: proto_pb.CreatePaintArtworkTask,
    responseType: proto_pb.ArtworkTaskProgressEvent,
    requestSerialize: serialize_name_jchein_portfolio_services_paint_gateway_CreatePaintArtworkTask,
    requestDeserialize: deserialize_name_jchein_portfolio_services_paint_gateway_CreatePaintArtworkTask,
    responseSerialize: serialize_name_jchein_portfolio_services_paint_gateway_ArtworkTaskProgressEvent,
    responseDeserialize: deserialize_name_jchein_portfolio_services_paint_gateway_ArtworkTaskProgressEvent,
  },
  monitor: {
    path: '/name.jchein.portfolio.services.paint.gateway.PaintGateway/monitor',
    requestStream: false,
    responseStream: true,
    requestType: proto_pb.MonitorPaintArtworkTask,
    responseType: proto_pb.ArtworkTaskProgressEvent,
    requestSerialize: serialize_name_jchein_portfolio_services_paint_gateway_MonitorPaintArtworkTask,
    requestDeserialize: deserialize_name_jchein_portfolio_services_paint_gateway_MonitorPaintArtworkTask,
    responseSerialize: serialize_name_jchein_portfolio_services_paint_gateway_ArtworkTaskProgressEvent,
    responseDeserialize: deserialize_name_jchein_portfolio_services_paint_gateway_ArtworkTaskProgressEvent,
  },
  acknowledge: {
    path: '/name.jchein.portfolio.services.paint.gateway.PaintGateway/acknowledge',
    requestStream: false,
    responseStream: false,
    requestType: proto_pb.CancelPaintArtworkTask,
    responseType: proto_pb.RequestReceived,
    requestSerialize: serialize_name_jchein_portfolio_services_paint_gateway_CancelPaintArtworkTask,
    requestDeserialize: deserialize_name_jchein_portfolio_services_paint_gateway_CancelPaintArtworkTask,
    responseSerialize: serialize_name_jchein_portfolio_services_paint_gateway_RequestReceived,
    responseDeserialize: deserialize_name_jchein_portfolio_services_paint_gateway_RequestReceived,
  },
  cancel: {
    path: '/name.jchein.portfolio.services.paint.gateway.PaintGateway/cancel',
    requestStream: false,
    responseStream: false,
    requestType: proto_pb.CancelPaintArtworkTask,
    responseType: proto_pb.RequestReceived,
    requestSerialize: serialize_name_jchein_portfolio_services_paint_gateway_CancelPaintArtworkTask,
    requestDeserialize: deserialize_name_jchein_portfolio_services_paint_gateway_CancelPaintArtworkTask,
    responseSerialize: serialize_name_jchein_portfolio_services_paint_gateway_RequestReceived,
    responseDeserialize: deserialize_name_jchein_portfolio_services_paint_gateway_RequestReceived,
  },
};

exports.PaintGatewayClient = grpc.makeGenericClientConstructor(PaintGatewayService);
