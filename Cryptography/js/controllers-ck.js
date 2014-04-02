"use strict";
function aesCtrl(a,b)
{
	var c=5;
	a.message="";
	a.cypher="";
	a.cypherString="";
	a.passphrase="";
	a.feedBack="";
	a.status="";
	a.encrypt=function()
	{
		if(a.message!=""&&a.passphrase!="")
		{
			a.cypher=CryptoJS.AES.encrypt(a.message,a.passphrase);
			a.cypherString=String(a.cypher);
			a.message="";
			a.feedBack="The text was successfully encrypted.";
			a.status="success"
		}
		else
		{
			a.feedBack="You need to enter or generate a pass phrase to encrypt this text.";
			a.status="error"
		}
	};
			a.decrypt=function()
			{
				if(a.cypher==""|a.passphrase=="")
				{
					a.feedBack="You need to enter your pass phrase to decrypt this cypher.";
					a.status="error"
				}
				else
				{
					a.message=CryptoJS.AES.decrypt(a.cypher,a.passphrase).toString(CryptoJS.enc.Utf8);
					if(a.message=="")
					{
						a.feedBack="Cypher and pass phrase do not match";
						a.status="error"
					}
					else
					{
						a.cypherString="";
						a.cypher="";
						a.feedBack="The cypher was successfully decrypted.";
						a.status="success"
					}
				}
			};
			a.newPassPhrase=function()
			{
				a.passphrase=b.getWords(c)
			};
			a.clear=function()
			{
				a.message="";
				a.cypher="";
				a.cypherString="";
				a.passphrase="";
				a.feedBack="";
				a.status=""
			}
		}
		function navigationCtrl(a,b)
		{
			a.location=b
		}
		function aboutCtrl()
		{

		}
		function memorizeCtrl()
		{

		}
		function homeCtrl(a)
		{
			Socialite.load("social-buttons")
		}
		function phrasesCtrl(a,b)
		{
			a.wordCount=4;
			a.wordListLength=b.wordListLength();
			a.getRandomWords=function()
			{
				a.words=b.getWords(a.wordCount);
				a.permutations=b.calculatePermutations(a.wordCount);
				a.lastWordCount=a.wordCount;
				a.wordListLength=b.wordListLength()
			};
			a.getRandomWords()
		};