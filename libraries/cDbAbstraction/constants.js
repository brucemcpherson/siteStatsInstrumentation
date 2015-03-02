var dhConstants = { 
  DB: {
    SCRIPTDB:1,
    PARSE:2,
    SHEET:3,
    FUSION:4,
    ORCHESTRATE:5,
    DRIVE:6,
    IMPORTIO:7,
    PROPERTIES:8,
    DATASTORE:9,
    MEMORY:10,
    MONGOLAB:11,
    MYSQL:12,
    FIREBASE:13,
    SCRATCH:14
  },
  LOCKING : {
    AGGRESSIVE:1,
    ENABLED:2,
    DISABLED:3
  },
  TRANSACTIONS : {
    ENABLED:2,
    DISABLED:3
  },
  SETTINGS: {                 
    CACHEEXPIRY:60*5, // 5 minutes
    LOCKEXPIRY:(1+Math.pow(2,5+1))*2000, // till expiry of backoff attempts
    ULENGTH:6,
    KEEPIDS:false,
    VERSION:getLibraryInfo().info.name+':'+getLibraryInfo().info.version,
    MAXATTEMPTS:5,
    SLEEPFOR:2000,
    MAXPROPERTYNAME:100,
    UAKEY:'uaKey',
    CONSTRAINT:'__CONSTR$KEY$',
    NOSILO:'__NO$SILO$',
    EXTRAROWS:30,
    PROTECTEXPIRY:3*60*1000,
    MAX_NUMBER: 9007199254740992, // this stuff is for lucene query ranges, dont know how to do negative numbers.
    MIN_NUMBER: 0,  
    MAX_STRING: '\uffff',
    MIN_STRING: '\0000',
    HIDDEN_KEY:'_$dbab$key$_'
  },
  ACTIONS: ['query','save','remove','count','get','update'],
  CODE: {  // negative errors are bad, postive are warning, 0 is good
    OK:0,
    CACHE:1,
    NULL_DATA:2,
    PUBLISH:3,
    ROLLBACK:4,
    TRANSACTION_INCAPABLE:5,
    DRIVER:-1,
    LOCK:-2,
    RESULT:-3,
    PROPERTY:-4,
    HTTP:-5,
    NOMATCH:2,
    OPERATION_NOT_ALLOWED:-6,
    ASSERT:-7,
    PARAMNOTIMPLEMENTED:-8,
    UNKNOWN_DRIVER:-9,
    HANDLE_GET:-10,
    REST_GET:-11,
    REST_ERROR:-12,
    NO_ACTION:-13,
    PARAMS_MISSING:-14,
    ACTION_FAILED:-15,
    UNDER_CONSTRUCTION:-16,
    OPERATION_UNSUPPORTED:-17,
    CLIENT_ERROR:-18,
    KEYS_AND_OBJECTS:-19,
    CHECKSUM:-20,
    TRANSACTION_ACTIVE:-21,
    TRANSACTION_ROLLBACK:-22,
    TRANSACTION_ROLLBACK_FAILED:-23,
    TRANSACTION_FAILURE:-24,
    TRANSACTION_ID_MISMATCH:-25,
    DRIVER_ASSERTION:-26,
    KEY_ASSERTION:-27
  },
  ERROR: {
    OK:'',
    CACHE:'this came from cache',
    DRIVER:'driver returned an error',
    LOCK:'unable to get a lock',
    RESULT:'error in driver results',
    PROPERTY:'invalid property/key',
    NOMATCH:'nothing matched the query',
    ASSERT:'synch or programming error',
    PARAMNOTIMPLEMENTED:'this driver has not implemented this parameter yet',
    HTTP:'some connection problem',
    OPERATION_NOT_ALLOWED:'policy disallows operation',
    UNKNOWN_DRIVER:'unknown driver type',
    HANDLE_GET:'could not get a datahandler',
    REST_GET:'could not get a restahandler',
    REST_ERROR:'some problem with the parameters',
    NO_ACTION:'no action has been performed yet',
    PARAMS_MISSING:'some parameters are missing',
    PUBLISH:'nothing to publish',
    ACTION_FAILED:'action not known or invalid',
    NULL_DATA:'null data was ignored',
    UNDER_CONSTRUCTION:'method still under construction for this driver - check back later',
    OPERATION_UNSUPPORTED:'this driver does not support method',
    CLIENT_ERROR:'reserved for client error message',
    KEYS_AND_OBJECTS:'number of keys do not match number of objects',
    CHECKSUM:'data has changed since getting keys',
    TRANSACTION_ACTIVE:'transaction already active',
    ROLLBACK:'operation(s) rolled back',
    TRANSACTION_ROLLBACK:'transaction failed, but rolled back successfully',
    TRANSACTION_ROLLBACK_FAILED:'transaction failed, and roll back failed',
    TRANSACTION_FAILURE:'some transaction failure',
    TRANSACTION_INCAPABLE:'transactions not enabled for this driver',
    TRANSACTION_ID_MISMATCH:'trying to end the wrong transaction',
    DRIVER_ASSERTION:'driver assertion failure',
    KEY_ASSERTION:"trying to save an object which already has a key"
  },
  CONSTRAINTS: {
    LT:'$lt',
    GTE:'$gte', 
    GT:'$gt',
    NE:'$ne',
    IN:'$in',
    NIN:'$nin',
    EQ:'$eq',
    LTE:'$lte'
  },
  FUSION_CONSTRAINTS: {
    LT:'<',
    GTE:'>=', 
    GT:'>',
    NE:'NOT EQUAL TO',
    IN:'IN',
    EQ:'=',
    LTE:'<='
  },
  DATASTORE_CONSTRAINTS: {
    LT:'LESS_THAN',
    GTE:'GREATER_THAN_OR_EQUAL', 
    GT:'GREATER_THAN',
    LTE:"LESS_THAN_OR_EQUAL",
    EQ:"EQUAL"
  }
};

var ENUMS = dhConstants;