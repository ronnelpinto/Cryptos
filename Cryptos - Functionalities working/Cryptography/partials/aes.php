<div id="top">
  <div class="container">
    <div class="row">
      <div class="span7">
        <h1>Like privacy?</h1>
      </div>
      <div class="span5">
        <p>Encrypt any text right in your browser</p>
      </div>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
  
    <form name="input" action="http://localhost/Crypto/#/phrases?algoid=1&algoname=AES&n={{UserId}}" method="get">
	       <input type="submit" value="Generate a new key">
     </form>
	 
	 <form name="input2" action="http://localhost/Crypto/Backend/getkey.php?algoid=1&algoname=AES&n={{UserId}}" method="post">
	       <input type="submit" value="Fetch key from database">
     </form>
  
    <div class="span12">
      <p class="Status {{status}}" ng-show="feedBackOfEncryption != ''">{{feedBackOfEncryption}}</p>
    </div>
    
    <div class="span12">
      <h2>Enter a custom key or <a ng-click="newPassPhrase();">generate random key</a></h2>
      <textarea class="input-xlarge" id="passphrasekey" ng-model="passphraseKey" placeholder=""ng-show="passphraseKey != ''">{{passphraseKey}}</textarea>
      <p class="note">The key is used to encrypt a text into a cypher and vice versa. Longer keys are better. See also: <a href="#/phrases">Key Maker</a></p>
	  <button type="submit" ng-click="getkey()" class="btn btn-primary" >Set key<i class="icon-arrow-right icon-white"></i></button>
    </div>

    

 
    <div class="span6">
      <form  class="form plain">
        <h2>Plain Text</h2>
        <div class="control-group">
          <div class="controls">
            <textarea id="messageInput" ng-model="messageInput" placeholder=""></textarea>
          </div>
        </div>
        <div class="control-group">
          <div class="controls">
            <button type="submit" ng-click="encryptUsingAes()" class="btn btn-primary" ng-disabled="messageInput == ''">Encrypt text Using Aes<i class="icon-arrow-right icon-white"></i></button>
          </div>
          
        </div>
      </form>
    </div>

    <div class="span6">
      <form class="form cypher">
        <h2>Cypher</h2>
        <div class="control-group">
          <div class="controls">
            <textarea id="cypherInput" ng-model="cypherText" placeholder=""></textarea>
          </div>
        </div>
        <div class="control-group">
          <div class="controls">
            <button  type="submit" ng-click="decryptUsingAes()" class="btn btn-primary" ng-disabled="cypherText == ''"><i class="icon-arrow-left icon-white"></i> Decrypt cypher Using Aes</button>
            
          </div>
        </div>
      </form>
    </div>
  </div>
</div>