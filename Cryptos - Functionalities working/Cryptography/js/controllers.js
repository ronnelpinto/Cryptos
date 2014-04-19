'use strict';

/* Controllers */


function AESCtrl($scope,WordService,$http,$location) 
{

  var passPhraseWordCount = 5;
  $scope.UserId=$location.search().n;
  $scope.messageInput = '';
  $scope.cypherText = '';
  $scope.cypherStringOfDes = '';
  $scope.passphraseKey = '';
  $scope.feedBackOfEncryption = '';
  $scope.status = '';
  $scope.keyvalue='';
  $scope.getkey = function()
  {
    $scope.passphraseKey=$location.search().key;
  }
   
   
  $scope.encryptUsingAes = function () 
  {

    if ($scope.messageInput != '' && $scope.passphraseKey != '' )
     {

      $scope.cypherText = CryptoJS.AES.encrypt($scope.messageInput, $scope.passphraseKey);

      $scope.cypherStringOfDes = String($scope.cypherText);


      $scope.feedBackOfEncryption = 'The text was successfully encrypted.';
  

      $scope.messageInput = '';

      $scope.passphraseKey='';

      $scope.status = 'success';

    
      

    } 
    else 
    {

      $scope.feedBackOfEncryption = 'You need to enter or generate a key phrase to encrypt text.';

      $scope.status = 'error';

    }
    
  }


  $scope.decryptUsingAes = function () 
  {

    
    if ($scope.cypherText == '' | $scope.passphraseKey == '' )
     {

      $scope.feedBackOfEncryption = 'You need to enter your key phrase to decrypt this cypher.';

      $scope.status = 'error';

    } 
    else 
    {

      $scope.messageInput = CryptoJS.AES.decrypt($scope.cypherText, $scope.passphraseKey).toString(CryptoJS.enc.Utf8);

      if ($scope.messageInput == '')
       {

        $scope.feedBackOfEncryption = 'Cypher and key phrase do not match';

        $scope.status = 'error';

      } else {

        $scope.cypherStringOfDes = '';

        $scope.cypherText = '';

        $scope.feedBackOfEncryption = 'The cypher was successfully decrypted by AES';

        $scope.status = 'success';

      }

    }

  }


  $scope.newPassPhrase = function ()
   {

    $scope.passphraseKey = WordService.getWords(passPhraseWordCount);
    
  }

  $scope.clear = function ()
  {

    $scope.messageText = '';
    $scope.cypherText = '';
    $scope.cypherStringOfDes = '';
    $scope.passphraseKey = '';
    $scope.feedBackOfEncryption = '';
    $scope.status = '';
    
  }

}





function navigationCtrl($scope, $location) 
{

  //required to high light the active navigational point
  $scope.location = $location;
  $scope.UserId=$location.search().n;

}

function aboutCtrl() {

}

function memorizeCtrl() {

}

function homeCtrl(WordService) {

  Socialite.load('social-buttons');

}

function phrasesCtrl($scope,WordService,$location,$http)
 {

  $scope.wordCount = 4;
  $scope.wordListLength = WordService.wordListLength();
  
  $scope.UserId=$location.search().n;
  $scope.AlgoId=$location.search().algoid;
  $scope.Algoname=$location.search().algoname;
  $scope.messageInput = '';
  $scope.cypherText = '';
  $scope.cypherStringOfDes = '';
  $scope.words = '';
  $scope.feedBackOfEncryption = '';
  $scope.status = '';

   $scope.passkey = function()
   {
   
    $http.get('http://localhost/Crypto/Backend/setkey.php',{params: {'n':$scope.UserId,'algoid':$scope.AlgoId,'algoname':$scope.Algoname,'key':$scope.words}
                    }).success(function(data, status, headers, config) 
                    {
                        $scope.data = data;
                        console.log(status + ' - ' + data);
                    }).error(function(data, status)
                    {  
                        $scope.status = status;
                        console.log(status + ' - ' + data);
                    });
   }
   

  $scope.getRandomWords = function () 
  {

    $scope.words = WordService.getWords($scope.wordCount);
    $scope.permutations = WordService.calculatePermutations($scope.wordCount);
    $scope.lastWordCount = $scope.wordCount;
    $scope.wordListLength = WordService.wordListLength();
    
  }

  $scope.getRandomWords();

}


function DESCtrl($scope,WordService,$http,$location) 
{

  var passPhraseWordCount = 5;
  $scope.UserId=$location.search().n;
  $scope.messageInput = '';
  $scope.cypherText = '';
  $scope.cypherStringOfDes = '';
  $scope.passphraseKey = '';
  $scope.feedBackOfEncryption = '';
  $scope.status = '';
  $scope.keyvalue='';
  $scope.getkey = function()
  {
    $scope.passphraseKey=$location.search().key;
  }
   
   
  $scope.encryptUsingDes = function () 
  {

    if ($scope.messageInput != '' && $scope.passphraseKey != '' )
     {

      $scope.cypherText = CryptoJS.DES.encrypt($scope.messageInput, $scope.passphraseKey);

      $scope.cypherStringOfDes = String($scope.cypherText);


      $scope.feedBackOfEncryption = 'The text was successfully encrypted.';
  

      $scope.messageInput = '';

      $scope.passphraseKey='';

      $scope.status = 'success';

    
      

    } 
    else 
    {

      $scope.feedBackOfEncryption = 'You need to enter or generate a key phrase to encrypt text.';

      $scope.status = 'error';

    }
    
  }


  $scope.decryptUsingDes = function () 
  {

    
    if ($scope.cypherText == '' | $scope.passphraseKey == '' )
     {

      $scope.feedBackOfEncryption = 'You need to enter your key phrase to decrypt this cypher.';

      $scope.status = 'error';

    } 
    else 
    {

      $scope.messageInput = CryptoJS.DES.decrypt($scope.cypherText, $scope.passphraseKey).toString(CryptoJS.enc.Utf8);

      if ($scope.messageInput == '')
       {

        $scope.feedBackOfEncryption = 'Cypher and key phrase do not match';

        $scope.status = 'error';

      } else {

        $scope.cypherStringOfDes = '';

        $scope.cypherText = '';

        $scope.feedBackOfEncryption = 'The cypher was successfully decrypted by DES';

        $scope.status = 'success';

      }

    }

  }


  $scope.newPassPhrase = function ()
   {

    $scope.passphraseKey = WordService.getWords(passPhraseWordCount);
    
  }

  $scope.clear = function ()
  {

    $scope.messageText = '';
    $scope.cypherText = '';
    $scope.cypherStringOfDes = '';
    $scope.passphraseKey = '';
    $scope.feedBackOfEncryption = '';
    $scope.status = '';
    
  }

}
