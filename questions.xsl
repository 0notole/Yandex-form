<?xml version="1.0" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml" >
<xsl:output method="html" doctype-system="about:legacy-compat" />
<xsl:template match="/">
 <html>
	<head>
		<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
		<script type="text/javascript" src="js/script.js"></script>
		<style type="text/css">@import url("css/style.css");</style>
		<title>Анкета.. Попытка XSLT</title>
	</head>
	<body>
		<div class="container">
			<xsl:apply-templates/>  
		</div>
	</body>
</html>
</xsl:template>
			
<xsl:template match="title">
<div class="title">
	<div><xsl:value-of select="big"/></div>
	<span><xsl:value-of select="caption"/></span>
</div>
</xsl:template>

<xsl:template match="question">
<div class="item">
	<div class="left number"><xsl:value-of select="num"/>.</div>
	<div class="content">
		<span class="text">
			<xsl:value-of select="text"/>
		</span>
		<textarea data-amount="4"></textarea>
		<div class="overlay"></div>
	</div>
	<a href="#" class="minimize up" title="Свернуть"></a>
</div>
</xsl:template>
			

</xsl:stylesheet>