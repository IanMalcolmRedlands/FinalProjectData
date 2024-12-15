// Minified by Kelley on Dec 7 2017
function breadcrumbs(){sURL=new String;bits=new Object;var x=0;var hold=0;var stop=0;var output="";sURL=location.href;sURL=sURL.slice(8,sURL.length);chunkStart=sURL.indexOf("/");sURL=sURL.slice(chunkStart+1,sURL.length)
while(!stop){chunkStart=sURL.indexOf("/");if(chunkStart!=-1){bits[x]=sURL.slice(0,chunkStart)
sURL=sURL.slice(chunkStart+1,sURL.length)}else{stop=1}
x++}
var convert;hold=x-2;for(var i in bits){if(i==hold){output+=" "}else{output+="<A HREF=\"";for(y=1;y<x-i;y++){output+="../"}}
convert=bits[i];while(convert.search("_")!=-1){convert=convert.replace("_"," ")}
while(convert.search("%20")!=-1){convert=convert.replace("%20"," ")}
if(i==hold){output+=" "+convert+" "}else{output+=bits[i]+"/\">"+convert+"</A> / "}}
output+="</span>";document.write(output)}