import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Collect,
  Create,
  Disperse,
  Distribute,
  FeeRateUpdate,
  FeeReceiverUpdate,
  OwnershipUpdate,
  RewardCollect
} from "../generated/LuckyMoney/LuckyMoney"

export function createCollectEvent(
  _collector: Address,
  _tokenAddress: Address,
  _mode: i32,
  _tokenAmount: BigInt,
  _id: Bytes
): Collect {
  let collectEvent = changetype<Collect>(newMockEvent())

  collectEvent.parameters = new Array()

  collectEvent.parameters.push(
    new ethereum.EventParam(
      "_collector",
      ethereum.Value.fromAddress(_collector)
    )
  )
  collectEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenAddress",
      ethereum.Value.fromAddress(_tokenAddress)
    )
  )
  collectEvent.parameters.push(
    new ethereum.EventParam(
      "_mode",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_mode))
    )
  )
  collectEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenAmount",
      ethereum.Value.fromUnsignedBigInt(_tokenAmount)
    )
  )
  collectEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromFixedBytes(_id))
  )

  return collectEvent
}

export function createCreateEvent(
  _id: Bytes,
  _tokenAddr: Address,
  _tokenAmount: BigInt,
  _expireTime: BigInt,
  _collectorCount: BigInt,
  _fee: BigInt,
  _gasRefund: BigInt
): Create {
  let createEvent = changetype<Create>(newMockEvent())

  createEvent.parameters = new Array()

  createEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromFixedBytes(_id))
  )
  createEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenAddr",
      ethereum.Value.fromAddress(_tokenAddr)
    )
  )
  createEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenAmount",
      ethereum.Value.fromUnsignedBigInt(_tokenAmount)
    )
  )
  createEvent.parameters.push(
    new ethereum.EventParam(
      "_expireTime",
      ethereum.Value.fromUnsignedBigInt(_expireTime)
    )
  )
  createEvent.parameters.push(
    new ethereum.EventParam(
      "_collectorCount",
      ethereum.Value.fromUnsignedBigInt(_collectorCount)
    )
  )
  createEvent.parameters.push(
    new ethereum.EventParam("_fee", ethereum.Value.fromUnsignedBigInt(_fee))
  )
  createEvent.parameters.push(
    new ethereum.EventParam(
      "_gasRefund",
      ethereum.Value.fromUnsignedBigInt(_gasRefund)
    )
  )

  return createEvent
}

export function createDisperseEvent(
  _sender: Address,
  _tokenAddr: Address,
  _tokenAmount: BigInt,
  _fee: BigInt
): Disperse {
  let disperseEvent = changetype<Disperse>(newMockEvent())

  disperseEvent.parameters = new Array()

  disperseEvent.parameters.push(
    new ethereum.EventParam("_sender", ethereum.Value.fromAddress(_sender))
  )
  disperseEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenAddr",
      ethereum.Value.fromAddress(_tokenAddr)
    )
  )
  disperseEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenAmount",
      ethereum.Value.fromUnsignedBigInt(_tokenAmount)
    )
  )
  disperseEvent.parameters.push(
    new ethereum.EventParam("_fee", ethereum.Value.fromUnsignedBigInt(_fee))
  )

  return disperseEvent
}

export function createDistributeEvent(
  _id: Bytes,
  _caller: Address,
  _remainCollector: BigInt,
  _remainTokenAmount: BigInt
): Distribute {
  let distributeEvent = changetype<Distribute>(newMockEvent())

  distributeEvent.parameters = new Array()

  distributeEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromFixedBytes(_id))
  )
  distributeEvent.parameters.push(
    new ethereum.EventParam("_caller", ethereum.Value.fromAddress(_caller))
  )
  distributeEvent.parameters.push(
    new ethereum.EventParam(
      "_remainCollector",
      ethereum.Value.fromUnsignedBigInt(_remainCollector)
    )
  )
  distributeEvent.parameters.push(
    new ethereum.EventParam(
      "_remainTokenAmount",
      ethereum.Value.fromUnsignedBigInt(_remainTokenAmount)
    )
  )

  return distributeEvent
}

export function createFeeRateUpdateEvent(feeRate: i32): FeeRateUpdate {
  let feeRateUpdateEvent = changetype<FeeRateUpdate>(newMockEvent())

  feeRateUpdateEvent.parameters = new Array()

  feeRateUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "feeRate",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(feeRate))
    )
  )

  return feeRateUpdateEvent
}

export function createFeeReceiverUpdateEvent(
  receiver: Address
): FeeReceiverUpdate {
  let feeReceiverUpdateEvent = changetype<FeeReceiverUpdate>(newMockEvent())

  feeReceiverUpdateEvent.parameters = new Array()

  feeReceiverUpdateEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )

  return feeReceiverUpdateEvent
}

export function createOwnershipUpdateEvent(
  oldOwner: Address,
  newOwner: Address
): OwnershipUpdate {
  let ownershipUpdateEvent = changetype<OwnershipUpdate>(newMockEvent())

  ownershipUpdateEvent.parameters = new Array()

  ownershipUpdateEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  ownershipUpdateEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipUpdateEvent
}

export function createRewardCollectEvent(
  _collector: Address,
  _tokenAddr: Address,
  _mode: i32,
  amount: BigInt
): RewardCollect {
  let rewardCollectEvent = changetype<RewardCollect>(newMockEvent())

  rewardCollectEvent.parameters = new Array()

  rewardCollectEvent.parameters.push(
    new ethereum.EventParam(
      "_collector",
      ethereum.Value.fromAddress(_collector)
    )
  )
  rewardCollectEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenAddr",
      ethereum.Value.fromAddress(_tokenAddr)
    )
  )
  rewardCollectEvent.parameters.push(
    new ethereum.EventParam(
      "_mode",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_mode))
    )
  )
  rewardCollectEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return rewardCollectEvent
}
