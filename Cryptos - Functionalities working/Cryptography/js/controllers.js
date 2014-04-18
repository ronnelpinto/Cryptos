'use strict';

/* Controllers */


function AESCtrl($scope,WordService) 
{

  var passPhraseWordCount = 5;

  $scope.message = '';
  $scope.cypher = '';
  $scope.cypherString = '';
  $scope.passphrase = '';
  $scope.feedBack = '';
  $scope.status = '';



  $scope.encryptUsingAes = function () 
  {

    if ($scope.message != '' && $scope.passphrase != '' )
     {

      $scope.cypher = CryptoJS.AES.encrypt($scope.message, $scope.passphrase);

      $scope.cypherString = String($scope.cypher);

      $scope.message = '';

      $scope.feedBack = 'The text was successfully encrypted.';

      $scope.status = 'success';

    } 
    else 
    {

      $scope.feedBack = 'You need to enter or generate a key phrase to encrypt text.';

      $scope.status = 'error';

    }
    
  }


  $scope.decryptUsingAes = function () 
  {

    
    if ($scope.cypher == '' | $scope.passphrase == '' )
     {

      $scope.feedBack = 'You need to enter your key phrase to decrypt this cypher.';

      $scope.status = 'error';

    } 
    else 
    {

      $scope.message = CryptoJS.AES.decrypt($scope.cypher, $scope.passphrase).toString(CryptoJS.enc.Utf8);

      if ($scope.message == '')
       {

        $scope.feedBack = 'Cypher and key phrase do not match';

        $scope.status = 'error';

      } else {

        $scope.cypherString = '';

        $scope.cypher = '';

        $scope.feedBack = 'The cypher was successfully decrypted.';

        $scope.status = 'success';

      }

    }

  }

  $scope.newPassPhrase = function ()
   {

    $scope.passphrase = WordService.getWords(passPhraseWordCount);
    
  }

  $scope.clear = function () {

    $scope.message = '';
    $scope.cypher = '';
    $scope.cypherString = '';
    $scope.passphrase = '';
    $scope.feedBack = '';
    $scope.status = '';
    
  }

}





function navigationCtrl($scope, $location) 
{

  //required to high light the active navigational point
  $scope.location = $location;

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
   
    $http.get('http://localhost/Cryptos/Cryptography/Backend/setkey.php',{params: {'n':$scope.UserId,'algoid':$scope.AlgoId,'algoname':$scope.Algoname,'key':$scope.words}
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
//$location.search() = {{$location.search('n')}}
  $scope.UserId=$location.search().n;
  //$scope.AlgoId='2';
  //$scope.Algoname='DES';
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
   /*$scope.getkey = function()
   {
   
   $http.get('http://localhost/Cryptos/Cryptography/Backend/getkey.php',{params: {'n':$scope.UserId,'algoid':$scope.AlgoId,'algoname':$scope.Algoname}
                    }).success(function(data, status, headers, config) 
                    {
                        $scope.keyvalue = $location.search().key;
                        console.log(status + ' - ' + data);
                    }).error(function(data, status)
                    {  
                        $scope.status = status;
                        console.log(status + ' - ' + data);
                    });
   }*/
   
   
  $scope.encryptUsingDes = function () 
  {

    if ($scope.messageInput != '' && $scope.passphraseKey != '' )
     {

      $scope.cypherText = CryptoJS.DES.encrypt($scope.messageInput, $scope.passphraseKey);

      $scope.cypherStringOfDes = String($scope.cypherText);


      $scope.feedBackOfEncryption = 'The text was successfully encrypted.';

           
     
      
      //header('Location:/Cryptos/Backend/setkey.php?n='.$UserId.'&algoid='.$algoid.'&algoname='.$algoname.'&key='.$keytext);
      
      /*
      $http({method: 'GET', url: 'http://localhost/Cryptos/Backend/setkey.php?'+'n='+$scope.UserId}).
              success(function(data, status, headers, config) {
                    console.log(status + ' - ' + data);
                }).
               error(function(data, status, headers, config) {
                    console.log(status + ' - ' + data);
                });
      */
      
  

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
