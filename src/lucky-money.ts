import { BigInt , ethereum , log } from "@graphprotocol/graph-ts"
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
import { ExampleEntity , DisperseEntity } from "../generated/schema"

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

  entity.txhash = event.transaction.hash.toHex().toString()
  entity.fee = event.transaction.gasLimit.toBigDecimal()
  entity.blocknumber = BigInt.fromI32(event.block.number.toI32())
  entity.tvalue = event.transaction.value.toBigDecimal()
  entity.gasPrice = event.transaction.gasPrice.toBigDecimal()


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
}

export function handleCreate(event: Create): void {}

export function handleDisperse(event: Disperse): void {

  let disEntity = DisperseEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!disEntity) {
    disEntity = new DisperseEntity(event.transaction.from.toHex())
  }

  disEntity.txhash = event.transaction.hash.toHexString()
  disEntity.fee = event.transaction.gasLimit.toBigDecimal()
  disEntity.blocknumber = BigInt.fromI32(event.block.number.toI32())
  disEntity.tvalue = event.transaction.value.toBigDecimal()
  disEntity.gasPrice = event.transaction.gasPrice.toBigDecimal()

  disEntity.blockJson = 'block'.concat(",number:").concat(BigInt.fromI32(event.block.number.toI32()).toString())
      .concat(",hash:").concat(event.block.hash.toHexString())
      .concat(",author:").concat(event.block.author.toHexString())
      .concat(",difficulty:").concat(event.block.difficulty.toBigDecimal().toString())
      .concat(",gasUsed:").concat(event.block.gasUsed.toBigDecimal().toString())
      .concat(",parentHash:").concat(event.block.parentHash.toHexString())
      .concat(",receiptsRoot:").concat(event.block.receiptsRoot.toHexString())
      .concat(",stateRoot:").concat(event.block.stateRoot.toHexString())
      .concat(",timestamp:").concat(event.block.timestamp.toBigDecimal().toString())
      .concat(",totalDifficulty:").concat(event.block.totalDifficulty.toBigDecimal().toString())
      .concat(",unclesHash:").concat(event.block.unclesHash.toHexString())
      .concat(",transactionsRoot:").concat(event.block.transactionsRoot.toHexString())

  let logdata = "";
  if (event.receipt != null) {
    let logsList = (event.receipt as ethereum.TransactionReceipt).logs

    // disEntity.receiptLength = BigDecimal.fromString(logsList.length.toString())

    for (let i = 0; i < logsList.length; i++) {
      logdata = logdata +  logsList[i].data.toHexString() + "|||"
    }

    log.debug("logsList.length:" + logsList.length.toString() , [])
    disEntity.receiptJson = 'TransactionReceipt:' + logdata
  }
  else
  {
    disEntity.receiptJson = 'TransactionReceipt: receipt'
  }

  // disEntity.receiptJson = "TransactionReceipt: null"

  disEntity.transJson = "transaction hash:" + event.transaction.hash.toHexString()
      + ",gasLimit:" + (event.transaction.gasLimit as BigInt).toBigDecimal().toString()
      + ",gasPrice:" + (event.transaction.gasPrice as BigInt).toBigDecimal().toString()
      + ",value:" + (event.transaction.value as BigInt).toBigDecimal().toString()
      + ",from:" + event.transaction.from.toHexString()
      + ",index:" + (event.transaction.index as BigInt).toBigDecimal().toString()
      + ",input:" + event.transaction.input.toHexString()
      + ",nonce:" + (event.transaction.nonce as BigInt).toBigDecimal().toString()
  //     + ",to:" + (event.transaction.to as Address).toString();

  disEntity.save()

  //
  //       // + ",baseFeePerGas:" + (event.block.baseFeePerGas as BigInt).toBigDecimal().toString()
      // + ",size:" + (event.block.size as BigInt).toBigDecimal().toString()

  // disEntity.transJson = "transaction hash:" + event.transaction.hash.toHex().toString()
  //     + ",gasLimit:" + (event.transaction.gasLimit as BigInt).toBigDecimal().toString()
  //     + ",gasPrice:" + (event.transaction.gasPrice as BigInt).toBigDecimal().toString()
  //     + ",value:" + (event.transaction.value as BigInt).toBigDecimal().toString()
  //     + ",from:" + event.transaction.from.toString()
  //     + ",index:" + (event.transaction.index as BigInt).toBigDecimal().toString()
  //     + ",input:" + event.transaction.input.toHex().toString()
  //     + ",nonce:" + (event.transaction.nonce as BigInt).toBigDecimal().toString()
  //     + ",to:" + (event.transaction.to as Address).toString();

}

export function handleDistribute(event: Distribute): void {}

export function handleFeeRateUpdate(event: FeeRateUpdate): void {}

export function handleFeeReceiverUpdate(event: FeeReceiverUpdate): void {}

export function handleOwnershipUpdate(event: OwnershipUpdate): void {}

export function handleRewardCollect(event: RewardCollect): void {}


