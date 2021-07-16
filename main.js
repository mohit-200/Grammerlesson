function _(id) {
    return document.getElementById(id);
}

var droppedIn = false;


window.onload = function() {
    // Drag zone functionality
    var dropZone1 = _('drop_zone1');
    var dropZone2 = _('drop_zone2');
    var i = 0;

    dropZone1.addEventListener('dragenter', handleDragEnter, false);
    dropZone1.addEventListener('dragleave', handleDragLeave, false);
    dropZone1.addEventListener('drop', handleDragDrop, false);

    dropZone2.addEventListener('dragenter', handleDragEnter, false);
    dropZone2.addEventListener('dragleave', handleDragLeave, false);
    dropZone2.addEventListener('drop', handleDragDrop, false);

    function handleDragEnter(e) {
        _('app_status').innerHTML = "You are dragging over the " + e
            .target
            .getAttribute('id');
    }

    function handleDragLeave(e) {
        _('app_status').innerHTML = "You left the " + e
            .target
            .getAttribute('id');
    }

    function handleDragDrop(e) {
        e.preventDefault();
        var element_id = e.dataTransfer.getData("text");
        if (_(element_id).getAttribute('id') == "object1" && e.target.getAttribute('id') == "drop_zone1" || _(element_id).getAttribute('id') == "object4" && e.target.getAttribute('id') == "drop_zone1" || _(element_id).getAttribute('id') == "object5" && e.target.getAttribute('id') == "drop_zone1" || _(element_id).getAttribute('id') == "object8" && e.target.getAttribute('id') == "drop_zone1") {
            alert("wrong");

        } else if (_(element_id).getAttribute('id') == "object2" && e.target.getAttribute('id') == "drop_zone2" || _(element_id).getAttribute('id') == "object3" && e.target.getAttribute('id') == "drop_zone2" || _(element_id).getAttribute('id') == "object6" && e.target.getAttribute('id') == "drop_zone2" || _(element_id).getAttribute('id') == "object7" && e.target.getAttribute('id') == "drop_zone2") {
            alert("wrong");

        } else {
            e.target.appendChild(_(element_id));
            _(element_id).removeAttribute("draggable")
            _(element_id).style.cursor = "default";
            droppedIn = true;
            _('app_status').innerHTML = "dropped element " + element_id + " into drop zone";
            i++;
            if (i == 8) {
                document.getElementById('gameOver').style.display = "block";
            }
        }

    }

    // Draggable element functionality
    var object1 = _('object1');
    var object2 = _('object2');
    var object3 = _('object3');
    var object4 = _('object4');
    var object5 = _('object5');
    var object6 = _('object6');
    var object7 = _('object7');
    var object8 = _('object8');

    var activeEvent = '';
    var originalX = '';
    var originalY = '';

    object1.addEventListener('dragstart', handleDragStart, false);
    object1.addEventListener('dragend', handleDragEnd, false);
    object1.addEventListener('touchstart', handleTouchStart, false);
    object1.addEventListener('touchmove', handleTouchMove, false);
    object1.addEventListener('touchend', handleTouchEnd, false);

    object2.addEventListener('dragstart', handleDragStart, false);
    object2.addEventListener('dragend', handleDragEnd, false);
    object2.addEventListener('touchstart', handleTouchStart, false);
    object2.addEventListener('touchmove', handleTouchMove, false);
    object2.addEventListener('touchend', handleTouchEnd, false);

    object3.addEventListener('dragstart', handleDragStart, false);
    object3.addEventListener('dragend', handleDragEnd, false);
    object3.addEventListener('touchstart', handleTouchStart, false);
    object3.addEventListener('touchmove', handleTouchMove, false);
    object3.addEventListener('touchend', handleTouchEnd, false);

    object4.addEventListener('dragstart', handleDragStart, false);
    object4.addEventListener('dragend', handleDragEnd, false);
    object4.addEventListener('touchstart', handleTouchStart, false);
    object4.addEventListener('touchmove', handleTouchMove, false);
    object4.addEventListener('touchend', handleTouchEnd, false);

    object5.addEventListener('dragstart', handleDragStart, false);
    object5.addEventListener('dragend', handleDragEnd, false);
    object5.addEventListener('touchstart', handleTouchStart, false);
    object5.addEventListener('touchmove', handleTouchMove, false);
    object5.addEventListener('touchend', handleTouchEnd, false);

    object6.addEventListener('dragstart', handleDragStart, false);
    object6.addEventListener('dragend', handleDragEnd, false);
    object6.addEventListener('touchstart', handleTouchStart, false);
    object6.addEventListener('touchmove', handleTouchMove, false);
    object6.addEventListener('touchend', handleTouchEnd, false);

    object7.addEventListener('dragstart', handleDragStart, false);
    object7.addEventListener('dragend', handleDragEnd, false);
    object7.addEventListener('touchstart', handleTouchStart, false);
    object7.addEventListener('touchmove', handleTouchMove, false);
    object7.addEventListener('touchend', handleTouchEnd, false);

    object8.addEventListener('dragstart', handleDragStart, false);
    object8.addEventListener('dragend', handleDragEnd, false);
    object8.addEventListener('touchstart', handleTouchStart, false);
    object8.addEventListener('touchmove', handleTouchMove, false);
    object8.addEventListener('touchend', handleTouchEnd, false);

    function handleDragStart(e) {
        _('app_status').innerHTML = "Dragging the element " + e.target.getAttribute('id');
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setData("text", e.target.getAttribute('id'));
    }

    function handleDragEnd(e) {

        if (droppedIn == false) {
            _('app_status').innerHTML = " Wrong Attempt ";
        }
        droppedIn = false;
    }

    function handleTouchStart(e) {
        _('app_status').innerHTML = "Touch start with element " + e.target.getAttribute('id');
        originalX = (e.target.offsetLeft - 10) + "px";
        originalY = (e.target.offsetTop - 10) + "px";
        activeEvent = 'start';
    }

    function handleTouchMove(e) {
        var touchLocation = e.targetTouches[0];
        var pageX = (touchLocation.pageX - 50) + "px";
        var pageY = (touchLocation.pageY - 50) + "px";
        _('app_status').innerHTML = "Touch x " + pageX + " Touch y " + pageY;
        e.target.style.position = "absolute";
        e.target.style.left = pageX;
        e.target.style.top = pageY;
        activeEvent = 'move';
    }

    function handleTouchEnd(e) {
        e.preventDefault();
        if (activeEvent === 'move') {
            var pageX = (parseInt(e.target.style.left) - 50);
            var pageY = (parseInt(e.target.style.top) - 50);

            if (detectTouchEnd(dropZone1.offsetLeft, dropZone1.offsetTop, pageX, pageY, dropZone1.offsetWidth, dropZone1.offsetHeight)) {
                if (e.target.getAttribute('id') == "object2", "object3", "object6", "object7") {
                    alert("wrong");
                } else {
                    dropZone1.appendChild(e.target);
                    e.target.style.position = "initial";
                    droppedIn = true;
                    _('app_status').innerHTML = "You droped " + e
                        .target
                        .getAttribute('id') + " into drop zone1";
                }

            } else if (detectTouchEnd(dropZone2.offsetLeft, dropZone2.offsetTop, pageX, pageY, dropZone2.offsetWidth, dropZone2.offsetHeight)) {
                if (e.target.getAttribute('id') == "object1", "object4", "object5", "object8") {
                    alert("wrong");
                } else {
                    dropZone2.appendChild(e.target);
                    e.target.style.position = "initial";
                    droppedIn = true;
                    _('app_status').innerHTML = "You droped " + e
                        .target
                        .getAttribute('id') + " into drop zone1";
                }
            }

        }
    }

    function detectTouchEnd(x1, y1, x2, y2, w, h) {
        //Very simple detection here
        if (x2 - x1 > w)
            return false;
        if (y2 - y1 > h)
            return false;
        return true;
    }
}