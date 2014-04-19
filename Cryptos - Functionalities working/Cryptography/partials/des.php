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
  
    <form name="input" action="http://localhost/Crypto/#/phrases?algoid=2&algoname=DES&n={{UserId}}" method="get">
	       <input type="submit" value="Generate a new key">
     </form>
	 
	 <form name="input2" action="http://localhost/Crypto/Backend/getkey.php?algoid=2&algoname=DES&n={{UserId}}" method="post">
	       <input type="submit" value="Fetch key from database">
     </form>
  
    <div class="span12">
      <p class="Status {{status}}" ng-show="feedBackOfEncryption != ''">{{feedBackOfEncryption}}</p>
    </div>
    
    <div class="span12">
      <h2>Key</h2>
      <textarea class="input-xlarge" id="passphrasekey" ng-model="passphraseKey" placeholder=""ng-show="passphraseKey != ''">{{passphraseKey}}</textarea>
      
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
            <button type="submit" ng-click="encryptUsingDes()" class="btn btn-primary" ng-disabled="messageInput == ''">Encrypt text Using Des<i class="icon-arrow-right icon-white"></i></button>
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
            <button  type="submit" ng-click="decryptUsingDes()" class="btn btn-primary" ng-disabled="cypherText == ''"><i class="icon-arrow-left icon-white"></i> Decrypt cypher Using Des</button>
            
          </div>
        </div>
      </form>
    </div>
  </div>
</div>