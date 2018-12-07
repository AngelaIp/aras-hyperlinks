// fill html element
var link_el = document.getElementById("websiteLink"); // html element
var link_text = document.thisItem.getProperty("web_site", "");
var link_dest = document.thisItem.getProperty("web_site", "");
link_el.innerHTML = link_text;
link_el.href = link_dest;
link_el.target = "_new";

// set visibility
var websiteFieldName = 'web_site';
var htmlWebsiteFieldName = 'html_web_site';

var isItemNew = aras.isNew(parent.item);
var isItemLocked = aras.isLocked(parent.item);

setFieldVisibilityByName(websiteFieldName,(isItemNew || isItemLocked) );
setFieldVisibilityByName(htmlWebsiteFieldName,(isItemNew || !isItemLocked) );

// helper functions
function setFieldVisibilityByName(fieldName, isVisible)
{
	var field = getFieldByName(fieldName);
	if (!isNullOrUndefined(field)) {
		field.style.visibility = (isVisible) ? 'visible' : 'hidden';
	}
}

function isNullOrUndefined(obj)
{
	return ((typeof (obj) === 'undefined') || (obj === null));
}