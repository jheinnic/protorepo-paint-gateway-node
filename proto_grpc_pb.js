// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_pb = require('./proto_pb.js');

function serialize_name_jchein_portfolio_random_art_CancelPaintArtworkTask(arg) {
  if (!(arg instanceof proto_pb.CancelPaintArtworkTask)) {
    throw new Error('Expected argument of type name.jchein.portfolio.random_art.CancelPaintArtworkTask');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_name_jchein_portfolio_random_art_CancelPaintArtworkTask(buffer_arg) {
  return proto_pb.CancelPaintArtworkTask.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_name_jchein_portfolio_random_art_CommandReceived(arg) {
  if (!(arg instanceof proto_pb.CommandReceived)) {
    throw new Error('Expected argument of type name.jchein.portfolio.random_art.CommandReceived');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_name_jchein_portfolio_random_art_CommandReceived(buffer_arg) {
  return proto_pb.CommandReceived.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_name_jchein_portfolio_random_art_CreatePaintArtworkTask(arg) {
  if (!(arg instanceof proto_pb.CreatePaintArtworkTask)) {
    throw new Error('Expected argument of type name.jchein.portfolio.random_art.CreatePaintArtworkTask');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_name_jchein_portfolio_random_art_CreatePaintArtworkTask(buffer_arg) {
  return proto_pb.CreatePaintArtworkTask.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_name_jchein_portfolio_random_art_UpdatePaintArtworkTask(arg) {
  if (!(arg instanceof proto_pb.UpdatePaintArtworkTask)) {
    throw new Error('Expected argument of type name.jchein.portfolio.random_art.UpdatePaintArtworkTask');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_name_jchein_portfolio_random_art_UpdatePaintArtworkTask(buffer_arg) {
  return proto_pb.UpdatePaintArtworkTask.deserializeBinary(new Uint8Array(buffer_arg));
}


// import "name/jchein/portfolio/common/grpc/action/actions.proto";
//
// Incoming paint task queue.
var PaintGatewayService = exports.PaintGatewayService = {
  createPaintArtworkTasks: {
    path: '/name.jchein.portfolio.random_art.PaintGateway/createPaintArtworkTasks',
    requestStream: true,
    responseStream: true,
    requestType: proto_pb.CreatePaintArtworkTask,
    responseType: proto_pb.CommandReceived,
    requestSerialize: serialize_name_jchein_portfolio_random_art_CreatePaintArtworkTask,
    requestDeserialize: deserialize_name_jchein_portfolio_random_art_CreatePaintArtworkTask,
    responseSerialize: serialize_name_jchein_portfolio_random_art_CommandReceived,
    responseDeserialize: deserialize_name_jchein_portfolio_random_art_CommandReceived,
  },
  createPaintArtworkTask: {
    path: '/name.jchein.portfolio.random_art.PaintGateway/createPaintArtworkTask',
    requestStream: false,
    responseStream: true,
    requestType: proto_pb.CreatePaintArtworkTask,
    responseType: proto_pb.CommandReceived,
    requestSerialize: serialize_name_jchein_portfolio_random_art_CreatePaintArtworkTask,
    requestDeserialize: deserialize_name_jchein_portfolio_random_art_CreatePaintArtworkTask,
    responseSerialize: serialize_name_jchein_portfolio_random_art_CommandReceived,
    responseDeserialize: deserialize_name_jchein_portfolio_random_art_CommandReceived,
  },
  cancelPaintArtworkTask: {
    path: '/name.jchein.portfolio.random_art.PaintGateway/cancelPaintArtworkTask',
    requestStream: false,
    responseStream: true,
    requestType: proto_pb.CancelPaintArtworkTask,
    responseType: proto_pb.CommandReceived,
    requestSerialize: serialize_name_jchein_portfolio_random_art_CancelPaintArtworkTask,
    requestDeserialize: deserialize_name_jchein_portfolio_random_art_CancelPaintArtworkTask,
    responseSerialize: serialize_name_jchein_portfolio_random_art_CommandReceived,
    responseDeserialize: deserialize_name_jchein_portfolio_random_art_CommandReceived,
  },
  reportTaskState: {
    path: '/name.jchein.portfolio.random_art.PaintGateway/reportTaskState',
    requestStream: true,
    responseStream: true,
    requestType: proto_pb.UpdatePaintArtworkTask,
    responseType: proto_pb.CommandReceived,
    requestSerialize: serialize_name_jchein_portfolio_random_art_UpdatePaintArtworkTask,
    requestDeserialize: deserialize_name_jchein_portfolio_random_art_UpdatePaintArtworkTask,
    responseSerialize: serialize_name_jchein_portfolio_random_art_CommandReceived,
    responseDeserialize: deserialize_name_jchein_portfolio_random_art_CommandReceived,
  },
};

exports.PaintGatewayClient = grpc.makeGenericClientConstructor(PaintGatewayService);
