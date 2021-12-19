<template>
    <div class="btn-toolbar" role="toolbar">
      <div class="d-grid gap-2 d-md-block col-12 mx-auto" role="group">
        <button type="button" class="btn btn-danger" id="undo-button">Undo</button>
        <button type="button" class="btn btn-secondary" id="redo-button">Redo</button>
        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#loadModal">Load</button>
        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#saveModal">Save</button>
      </div>
    </div>
</template>