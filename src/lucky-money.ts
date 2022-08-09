import { BigInt } from "@graphprotocol/graph-ts"
import {
  LuckyMoney,
  Collect,
  Create,
  Disperse,
  Distribute,
  FeeRateUpdate,
  FeeReceiverUpdate,
  OwnershipUpdate,
  RewardCollect
} from "../generated/LuckyMoney/LuckyMoney"
import { ExampleEntity } from "../generated/schema"

export function handleCollect(event: Collect): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity._collector = event.params._collector
  entity._tokenAddress = event.params._tokenAddress

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.GetInitializeData(...)
  // - contract.calculateRandomAmount(...)
  // - contract.expireTime(...)
  // - contract.feeBase(...)
  // - contract.feeOf(...)
  // - contract.feeRate(...)
  // - contract.feeReceiver(...)
  // - contract.getBlockAsSeed(...)
  // - contract.getEthSignedMessageHash(...)
  // - contract.getLuckyMoneyId(...)
  // - contract.getMessageHash(...)
  // - contract.hasCollected(...)
  // - contract.luckyMoneys(...)
  // - contract.owner(...)
  // - contract.recoverSigner(...)
  // - contract.refundAmount(...)
  // - contract.rewardBalances(...)
  // - contract.rewardConfigs(...)
  // - contract.rewards(...)
  // - contract.splitSignature(...)
}

export function handleCreate(event: Create): void {}

export function handleDisperse(event: Disperse): void {}

export function handleDistribute(event: Distribute): void {}

export function handleFeeRateUpdate(event: FeeRateUpdate): void {}

export function handleFeeReceiverUpdate(event: FeeReceiverUpdate): void {}

export function handleOwnershipUpdate(event: OwnershipUpdate): void {}

export function handleRewardCollect(event: RewardCollect): void {}
