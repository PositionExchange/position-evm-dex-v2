import {deployAndCreateRouterHelper, TestLiquidity} from "../test-liquidity";

describe("LiquidityActionCase01-05", async function(){
    let testHelper: TestLiquidity

    beforeEach(async () => {
        testHelper = await deployAndCreateRouterHelper(10_000, false)
    })

    it ("Case #1", async () => {
        return testHelper.process(`
- S0: SetCurrentPrice
  Action:
    Price: 165000
- S1: AddLiquidity
  Action:
    Id: 1
    IndexPipRange: 5
    Asset: base
    AmountVirtual: 100
  Expect:
    Pool:
      Liquidity: 9541.9238831013
      BaseVirtual: 100
      QuoteVirtual: 1803.7657501839
      BaseReal: 2349.0592751645
      QuoteReal: 38759.4780402140
      IndexPipRange: 5 
      MaxPip: 179999 
      MinPip: 150000 
      FeeGrowthBase: 0 
      FeeGrowthQuote: 0 
    User:
      Id: 1
      TokenId: 1000001
      Liquidity: 9541.9238831013
      FeeGrowthBase: 0 
      FeeGrowthQuote: 0 
      BaseVirtual: 100
      QuoteVirtual: 1803.7657501839
      BalanceBase: 9900
      BalanceQuote: 8196.2342498161
- S2: AddLiquidity
  Action:
    Id: 2
    IndexPipRange: 5
    Asset: base
    AmountVirtual: 50
  Expect:
    Pool:
      Liquidity: 14312.8858246520
      BaseVirtual: 150
      QuoteVirtual: 2705.6486252758
      BaseReal: 3523.5889127467
      QuoteReal: 58139.2170603210
      IndexPipRange: 5 
      MaxPip: 179999 
      MinPip: 150000 
      FeeGrowthBase: 0 
      FeeGrowthQuote: 0 
    User:
      Id: 2
      TokenId: 1000002
      Liquidity: 4770.9619415507
      FeeGrowthBase: 0 
      FeeGrowthQuote: 0 
      BaseVirtual: 50
      QuoteVirtual: 901.8828750919
      BalanceBase: 9950
      BalanceQuote: 9098.1171249081
- S3: IncreaseLiquidity
  Action:
    Id: 1
    TokenId: 1000001
    Asset: Base
    AmountVirtual: 20
  Expect:
    User:
      Id: 1
      BalanceBase: 9880
      BalanceQuote: 7835.4810997793
- S4: RemoveLiquidity
  Action:
    Id: 1
    TokenId: 1000001
  Expect:
    Pool:
      Liquidity: 4770.9619415507
      BaseVirtual: 50
      QuoteVirtual: 901.8828750919
      BaseReal: 1174.5296375822
      QuoteReal: 19379.7390201070
      IndexPipRange: 5 
      MaxPip: 179999 
      MinPip: 150000 
    User:
      Id: 1
      TokenId: 1000001
      Liquidity: 0
      FeeGrowthBase: 0 
      FeeGrowthQuote: 0 
      BalanceBase: 10000
      BalanceQuote: 10000
- S5: RemoveLiquidity
  Action:
    Id: 2
    TokenId: 1000002
  Expect:
    Pool:
      Liquidity: 0
      BaseVirtual: 0
      QuoteVirtual: 0
      BaseReal: 0
      QuoteReal: 0
      IndexPipRange: 5 
      MaxPip: 179999 
      MinPip: 150000 
    User:
      Id: 2
      TokenId: 2
      Liquidity: 0
      FeeGrowthBase: 0 
      FeeGrowthQuote: 0 
      BalanceBase: 10000
      BalanceQuote: 10000
`)
    })
    it ("Case #2", async () => {
        return testHelper.process(`
- S0: SetCurrentPrice
  Action:
    Price: 165000
- S1: AddLiquidity
  Action:
    Id: 1
    IndexPipRange: 5
    Asset: base
    AmountVirtual: 100
  Expect:
    Pool:
      Liquidity: 9541.9238831013
      BaseVirtual: 100
      QuoteVirtual: 1803.7657501839
      BaseReal: 2349.0592751645
      QuoteReal: 38759.4780402140
      IndexPipRange: 5 
      MaxPip: 179999 
      MinPip: 150000 
      FeeGrowthBase: 0 
      FeeGrowthQuote: 0 
    User:
      Id: 1
      TokenId: 1000001
      Liquidity: 9541.9238831013
      FeeGrowthBase: 0 
      FeeGrowthQuote: 0 
      BaseVirtual: 100
      QuoteVirtual: 1803.7657501839
      BalanceBase: 9900
      BalanceQuote: 8196.2342498161
- S2: OpenLimit
  Action:
    Id: 2
    Asset: base
    Side: 1
    Quantity: 10
    Price: 200000
  Expect:
    PendingOrder:
      OrderId: 1
      Price: 200000
      Size : 10
      Side: 1
    User:
      Id: 2
      BalanceBase: 9990
      BalanceQuote: 10000
- S3: OpenMarket
  Action:
    Id: 3
    asset: base
    Side: 0
    Quantity: 34.8028021274
  Expect:
    Pool:
      Liquidity: 9541.9238831013
      BaseVirtual: 65.1971978726
      QuoteVirtual: 2386.6477516003
      BaseReal: 2314.2564730371
      QuoteReal: 39342.3600416305
      IndexPipRange: 5
      MaxPip: 179999
      MinPip: 150000
      FeeGrowthBase: 0
      FeeGrowthQuote: 0
    User:
      Id: 3
      BalanceBase: 10034.8028021274
      BalanceQuote: 9417.1179985836
- S4: AddLiquidity
  Action:
    Id: 2
    IndexPipRange: 5
    Asset: base
    AmountVirtual: 50
  Expect:
    Pool:
      Liquidity: 16859.6646713993
      BaseVirtual: 115.1971978726
      QuoteVirtual: 4216.9777577028
      BaseReal: 4089.0693089808
      QuoteReal: 69514.1782526738
      IndexPipRange: 5 
      MaxPip: 179999 
      MinPip: 150000 
      FeeGrowthBase: 0 
      FeeGrowthQuote: 0 
    User:
      Id: 2
      TokenId: 1000002
      Liquidity: 7317.7407882980
      FeeGrowthBase: 0 
      FeeGrowthQuote: 0 
      BaseVirtual: 50
      QuoteVirtual: 1830.3300061024
      BalanceBase: 9940
      BalanceQuote: 8169.6699938976
- S5: IncreaseLiquidity
  Action:
    Id: 1
    TokenId: 1000001
    Asset: Base
    AmountVirtual: 20
  Expect:
    User:
      Id: 1
      BalanceBase: 9880
      BalanceQuote: 7464.1022473752
- S6: OpenMarket
  Action:
    Id: 3
    asset: base
    Side: 0
    Quantity: 145.1971978726
  Expect:
    Pool:
      Liquidity: 19786.7609867185
      BaseVirtual: 0
      QuoteVirtual: 7314.0882620707
      BaseReal: 4663.7972454857
      QuoteReal: 83947.8840390180
      IndexPipRange: 5
      MaxPip: 179999
      MinPip: 150000
      FeeGrowthBase: 0
      FeeGrowthQuote: 0
    User:
      Id: 3
      BalanceBase: 10180
      BalanceQuote: 7032.1394966566
- S7: Expect
  User:
    Id: 2
    BalanceBase: 9940
    BalanceQuote: 8189.6699938976
- S8: IncreaseLiquidity
  Action:
    Id: 2
    TokenId: 1000002
    Asset: Base
    AmountVirtual: 10
  Expect:
    User:
      Id: 2
      BalanceBase: 9940
      BalanceQuote: 8179.6699938976
- S9: RemoveLiquidity
  Action:
    Id: 1
    TokenId: 1000001
  Expect:
    Pool:
      Liquidity: 7344.7937308901
      BaseVirtual: 0
      QuoteVirtual: 2714.9703607625
      BaseReal: 2.3636925600
      QuoteReal: 42.5462297105
      IndexPipRange: 5 
      MaxPip: 179999 
      MinPip: 150000 
    User:
      Id: 1
      TokenId: 1000001
      Liquidity: 0
      FeeGrowthBase: 0 
      FeeGrowthQuote: 0 
      BalanceBase: 9880
      BalanceQuote: 12073.2201486833
- S10: RemoveLiquidity
  Action:
    Id: 2
    TokenId: 1000002
  Expect:
    Pool:
      Liquidity: 0
      BaseVirtual: 0
      QuoteVirtual: 0
      BaseReal: 0
      QuoteReal: 0
      IndexPipRange: 5 
      MaxPip: 179999 
      MinPip: 150000 
    User:
      Id: 2
      TokenId: 2
      Liquidity: 0
      FeeGrowthBase: 0 
      FeeGrowthQuote: 0 
      BalanceBase: 9940
      BalanceQuote: 10894.6403546601
`)
    })
    it ("Case #3", async () => {
        return testHelper.process(`
- S0: SetCurrentPrice
  Action:
    Price: 165000
- S1: AddLiquidity
  Action:
    Id: 1
    IndexPipRange: 5
    Asset: base
    AmountVirtual: 100
  Expect:
    Pool:
      Liquidity: 9541.9238831013
      BaseVirtual: 100
      QuoteVirtual: 1803.7657501839
      BaseReal: 2349.0592751645
      QuoteReal: 38759.4780402140
      IndexPipRange: 5 
      MaxPip: 179999 
      MinPip: 150000 
      FeeGrowthBase: 0 
      FeeGrowthQuote: 0 
    User:
      Id: 1
      TokenId: 1000001
      Liquidity: 9541.9238831013
      FeeGrowthBase: 0 
      FeeGrowthQuote: 0 
      BaseVirtual: 100
      QuoteVirtual: 1803.7657501839
      BalanceBase: 9900
      BalanceQuote: 8196.2342498161
- S2: OpenLimit
  Action:
    Id: 2
    Asset: base
    Side: 0
    Quantity: 10
    Price: 130000
  Expect:
    PendingOrder:
      OrderId: 1
      Price: 130000
      Size : 10
      Side: 0
    User:
      Id: 2
      BalanceBase: 10000
      BalanceQuote: 9870
- S3: OpenMarket
  Action:
    Id: 3
    asset: base
    Side: 0
    Quantity: 36.4216956108
  Expect:
    Pool:
      Liquidity: 9541.9238831013
      BaseVirtual: 136.4216956108
      QuoteVirtual: 1211.9832423751
      BaseReal: 2385.4809707753
      QuoteReal: 38167.6955324052
      IndexPipRange: 5
      MaxPip: 179999
      MinPip: 150000
      FeeGrowthBase: 0
      FeeGrowthQuote: 0
    User:
      Id: 3
      BalanceBase: 9963.5783043892
      BalanceQuote: 10591.7825078088
- S4: IncreaseLiquidity
  Action:
    Id: 1
    TokenId: 1000001
    Asset: Base
    AmountVirtual: 20
  Expect:
    User:
      Id: 1
      BalanceBase: 9880
      BalanceQuote: 8018.5523588312
- S5: AddLiquidity
  Action:
    Id: 2
    IndexPipRange: 5
    Asset: base
    AmountVirtual: 50
  Expect:
    Pool:
      Liquidity: 14438.0268733652
      BaseVirtual: 206.4216956108
      QuoteVirtual: 1833.8698608222
      BaseReal: 3609.5067183413
      QuoteReal: 57752.1074934606
      IndexPipRange: 5 
      MaxPip: 179999 
      MinPip: 150000 
      FeeGrowthBase: 0 
      FeeGrowthQuote: 0 
    User:
      Id: 2
      TokenId: 1000002
      Liquidity: 3497.2164216170
      FeeGrowthBase: 0 
      FeeGrowthQuote: 0 
      BaseVirtual: 50
      QuoteVirtual: 444.2047274623
      BalanceBase: 9950
      BalanceQuote: 9425.7952725377      
- S6: OpenMarket
  Action:
    Id: 3
    asset: base
    Side: 1
    Quantity: 128.3757905013
  Expect:
    Pool:
      Liquidity: 0
      BaseVirtual: 0
      QuoteVirtual: 0
      BaseReal: 0
      QuoteReal: 0
      IndexPipRange: 4
      MaxPip: 149999
      MinPip: 120000
      FeeGrowthBase: 0
      FeeGrowthQuote: 0
    User:
      Id: 3
      BalanceBase: 9835.2025138879
      BalanceQuote: 12555.6523686311
- S7: Expect
  User:
    Id: 2
    BalanceBase: 9960
    BalanceQuote: 9425.7952725377
- S8: IncreaseLiquidity
  Action:
    Id: 2
    TokenId: 1000002
    Asset: Base
    AmountVirtual: 10
  Expect:
    User:
      Id: 2
      BalanceBase: 9950
      BalanceQuote: 9425.7952725377
- S9: RemoveLiquidity
  Action:
    Id: 1
    TokenId: 1000001
  Expect:
    Pool:
      Liquidity: 3941.7403939603
      BaseVirtual: 88.67329186
      QuoteVirtual: 0
      BaseReal: 1017.7529933921
      QuoteReal: 15266.2949008812
      IndexPipRange: 5 
      MaxPip: 179999 
      MinPip: 150000 
    User:
      Id: 1
      TokenId: 1000001
      Liquidity: 0
      FeeGrowthBase: 0 
      FeeGrowthQuote: 0 
      BalanceBase: 10126.1241942493
      BalanceQuote: 8018.5523588312
- S10: RemoveLiquidity
  Action:
    Id: 2
    TokenId: 1000002
  Expect:
    Pool:
      Liquidity: 0
      BaseVirtual: 0
      QuoteVirtual: 0
      BaseReal: 0
      QuoteReal: 0
      IndexPipRange: 5 
      MaxPip: 179999 
      MinPip: 150000 
    User:
      Id: 2
      TokenId: 1000002
      Liquidity: 0
      FeeGrowthBase: 0 
      FeeGrowthQuote: 0 
      BalanceBase: 10038.6732918628
      BalanceQuote: 9425.7952725377
`)
    })
})
