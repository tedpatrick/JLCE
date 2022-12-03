"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[9934],{69934:(e,t,s)=>{s.r(t),s.d(t,{YBaseCell:()=>g,YCodeCell:()=>y,YDocument:()=>d,YFile:()=>h,YMarkdownCell:()=>p,YNotebook:()=>c,YRawCell:()=>m,convertYMapEventToMapChange:()=>_,createCellFromType:()=>l,createMutex:()=>M,createStandaloneCell:()=>u});var a=s(26169),n=s(62318),o=s(90157),r=s(33967);const i=e=>JSON.parse(JSON.stringify(e));class d{constructor(){this.isDisposed=!1,this.ydoc=new r.Doc,this.source=this.ydoc.getText("source"),this.ystate=this.ydoc.getMap("state"),this.undoManager=new r.UndoManager([this.source],{trackedOrigins:new Set([this])}),this.awareness=new o.GL(this.ydoc),this._changed=new n.Signal(this)}get dirty(){return this.ystate.get("dirty")}set dirty(e){this.transact((()=>{this.ystate.set("dirty",e)}),!1)}transact(e,t=!0){this.ydoc.transact(e,t?this:null)}dispose(){this.isDisposed=!0,this.ydoc.destroy()}canUndo(){return this.undoManager.undoStack.length>0}canRedo(){return this.undoManager.redoStack.length>0}undo(){this.undoManager.undo()}redo(){this.undoManager.redo()}clearUndoHistory(){this.undoManager.clear()}get changed(){return this._changed}}class h extends d{constructor(){super(),this._modelObserver=e=>{const t={};t.sourceChange=e.changes.delta,this._changed.emit(t)},this._onStateChanged=e=>{const t=[];e.keysChanged.forEach((s=>{const a=e.changes.keys.get(s);a&&t.push({name:s,oldValue:a.oldValue,newValue:this.ystate.get(s)})})),this._changed.emit({stateChange:t})},this.ysource=this.ydoc.getText("source"),this.ysource.observe(this._modelObserver),this.ystate.observe(this._onStateChanged)}dispose(){this.ysource.unobserve(this._modelObserver),this.ystate.unobserve(this._onStateChanged)}static create(){return new h}getSource(){return this.ysource.toString()}setSource(e){this.transact((()=>{const t=this.ysource;t.delete(0,t.length),t.insert(0,e)}))}updateSource(e,t,s=""){this.transact((()=>{const a=this.ysource;a.insert(e,s),a.delete(e+s.length,t-e)}))}}class c extends d{constructor(e){super(),this._onYCellsChanged=e=>{e.changes.added.forEach((e=>{const t=e.content.type;this._ycellMapping.has(t)||this._ycellMapping.set(t,l(t));const s=this._ycellMapping.get(t);s._notebook=this,this.disableDocumentWideUndoRedo?s._undoManager=new r.UndoManager([s.ymodel],{}):s._undoManager=this.undoManager})),e.changes.deleted.forEach((e=>{const t=e.content.type,s=this._ycellMapping.get(t);s&&(s.dispose(),this._ycellMapping.delete(t))}));let t=0;const s=[];e.changes.delta.forEach((e=>{if(null!=e.insert){const a=e.insert.map((e=>this._ycellMapping.get(e)));s.push({insert:a}),this.cells.splice(t,0,...a),t+=e.insert.length}else null!=e.delete?(s.push(e),this.cells.splice(t,e.delete)):null!=e.retain&&(s.push(e),t+=e.retain)})),this._changed.emit({cellsChange:s})},this._onMetadataChanged=e=>{if(e.keysChanged.has("metadata")){const t=e.changes.keys.get("metadata"),s={oldValue:(null==t?void 0:t.oldValue)?t.oldValue:void 0,newValue:this.getMetadata()};this._changed.emit({metadataChange:s})}},this._onStateChanged=e=>{const t=[];e.keysChanged.forEach((s=>{const a=e.changes.keys.get(s);a&&t.push({name:s,oldValue:a.oldValue,newValue:this.ystate.get(s)})})),this._changed.emit({stateChange:t})},this.ycells=this.ydoc.getArray("cells"),this.ymeta=this.ydoc.getMap("meta"),this.ymodel=this.ydoc.getMap("model"),this.undoManager=new r.UndoManager([this.ycells],{trackedOrigins:new Set([this])}),this._ycellMapping=new Map,this._disableDocumentWideUndoRedo=e.disableDocumentWideUndoRedo,this.ycells.observe(this._onYCellsChanged),this.cells=this.ycells.toArray().map((e=>(this._ycellMapping.has(e)||this._ycellMapping.set(e,l(e)),this._ycellMapping.get(e)))),this.ymeta.observe(this._onMetadataChanged),this.ystate.observe(this._onStateChanged)}get nbformat(){return this.ystate.get("nbformat")}set nbformat(e){this.transact((()=>{this.ystate.set("nbformat",e)}),!1)}get nbformat_minor(){return this.ystate.get("nbformatMinor")}set nbformat_minor(e){this.transact((()=>{this.ystate.set("nbformatMinor",e)}),!1)}dispose(){this.ycells.unobserve(this._onYCellsChanged),this.ymeta.unobserve(this._onMetadataChanged),this.ystate.unobserve(this._onStateChanged)}getCell(e){return this.cells[e]}insertCell(e,t){this.insertCells(e,[t])}insertCells(e,t){t.forEach((e=>{this._ycellMapping.set(e.ymodel,e),this.disableDocumentWideUndoRedo||(e.undoManager=this.undoManager)})),this.transact((()=>{this.ycells.insert(e,t.map((e=>e.ymodel)))}))}moveCell(e,t){this.transact((()=>{const s=this.getCell(e).clone();this.deleteCell(e),this.insertCell(t,s)}))}deleteCell(e){this.deleteCellRange(e,e+1)}deleteCellRange(e,t){this.transact((()=>{this.ycells.delete(e,t-e)}))}getMetadata(){const e=this.ymeta.get("metadata");return e?i(e):{}}setMetadata(e){this.ymeta.set("metadata",i(e))}updateMetadata(e){this.ymeta.set("metadata",Object.assign({},this.getMetadata(),e))}static create(e){return new c({disableDocumentWideUndoRedo:e})}get disableDocumentWideUndoRedo(){return this._disableDocumentWideUndoRedo}}const l=e=>{switch(e.get("cell_type")){case"code":return new y(e);case"markdown":return new p(e);case"raw":return new m(e);default:throw new Error("Found unknown cell type")}},u=(e,t)=>{switch(e){case"markdown":return p.createStandalone(t);case"code":return y.createStandalone(t);default:return m.createStandalone(t)}};class g{constructor(e){this._notebook=null,this.isStandalone=!1,this._modelObserver=e=>{const t={},s=e.find((e=>e.target===this.ymodel.get("source")));s&&(t.sourceChange=s.changes.delta);const a=e.find((e=>e.target===this.ymodel.get("outputs")));a&&(t.outputsChange=a.changes.delta);const n=e.find((e=>e.target===this.ymodel));if(n&&n.keysChanged.has("metadata")){const e=n.changes.keys.get("metadata");t.metadataChange={oldValue:(null==e?void 0:e.oldValue)?e.oldValue:void 0,newValue:this.getMetadata()}}if(n&&n.keysChanged.has("execution_count")){const e=n.changes.keys.get("execution_count");t.executionCountChange={oldValue:e.oldValue,newValue:this.ymodel.get("execution_count")}}const o=this.ymodel.get("source");n&&n.keysChanged.has("source")&&(t.sourceChange=[{delete:this._prevSourceLength},{insert:o.toString()}]),this._prevSourceLength=o.length,this._changed.emit(t)},this.isDisposed=!1,this._undoManager=null,this._changed=new n.Signal(this),this.ymodel=e;const t=e.get("source");this._prevSourceLength=t?t.length:0,this.ymodel.observeDeep(this._modelObserver),this._awareness=null}get ysource(){return this.ymodel.get("source")}get awareness(){var e,t,s;return null!==(s=null!==(e=this._awareness)&&void 0!==e?e:null===(t=this.notebook)||void 0===t?void 0:t.awareness)&&void 0!==s?s:null}transact(e,t=!0){this.notebook&&t?this.notebook.transact(e):this.ymodel.doc.transact(e,this)}get undoManager(){var e;return this.notebook?(null===(e=this.notebook)||void 0===e?void 0:e.disableDocumentWideUndoRedo)?this._undoManager:this.notebook.undoManager:this._undoManager}set undoManager(e){this._undoManager=e}undo(){var e;null===(e=this.undoManager)||void 0===e||e.undo()}redo(){var e;null===(e=this.undoManager)||void 0===e||e.redo()}canUndo(){return!!this.undoManager&&this.undoManager.undoStack.length>0}canRedo(){return!!this.undoManager&&this.undoManager.redoStack.length>0}clearUndoHistory(){var e;null===(e=this.undoManager)||void 0===e||e.clear()}get notebook(){return this._notebook}static create(e=a.UUID.uuid4()){const t=new r.Map,s=new r.Text;return t.set("source",s),t.set("metadata",{}),t.set("cell_type",this.prototype.cell_type),t.set("id",e),new this(t)}static createStandalone(e){const t=this.create(e);t.isStandalone=!0;const s=new r.Doc;return s.getArray().insert(0,[t.ymodel]),t._awareness=new o.GL(s),t._undoManager=new r.UndoManager([t.ymodel],{trackedOrigins:new Set([t])}),t}clone(){const e=new r.Map,t=new r.Text(this.getSource());e.set("source",t),e.set("metadata",this.getMetadata()),e.set("cell_type",this.cell_type),e.set("id",this.getId());const s=new(0,this.constructor)(e);return s._undoManager=this.undoManager,s}get changed(){return this._changed}dispose(){this.ymodel.unobserveDeep(this._modelObserver),this._awareness&&this._awareness.destroy(),!this.notebook&&this._undoManager&&this._undoManager.destroy()}getAttachments(){return this.ymodel.get("attachments")}setAttachments(e){this.transact((()=>{null==e?this.ymodel.delete("attachments"):this.ymodel.set("attachments",e)}))}getId(){return this.ymodel.get("id")}getSource(){return this.ymodel.get("source").toString()}setSource(e){const t=this.ymodel.get("source");this.transact((()=>{t.delete(0,t.length),t.insert(0,e)}))}updateSource(e,t,s=""){this.transact((()=>{const a=this.ysource;a.insert(e,s),a.delete(e+s.length,t-e)}))}get cell_type(){throw new Error("A YBaseCell must not be constructed")}getMetadata(){return i(this.ymodel.get("metadata"))}setMetadata(e){this.transact((()=>{this.ymodel.set("metadata",i(e))}))}toJSON(){return{id:this.getId(),cell_type:this.cell_type,source:this.getSource(),metadata:this.getMetadata()}}}class y extends g{get cell_type(){return"code"}get execution_count(){return this.ymodel.get("execution_count")}set execution_count(e){this.transact((()=>{this.ymodel.set("execution_count",e)}))}getOutputs(){return i(this.ymodel.get("outputs").toArray())}setOutputs(e){const t=this.ymodel.get("outputs");this.transact((()=>{t.delete(0,t.length),t.insert(0,e)}),!1)}updateOutputs(e,t,s=[]){const a=this.ymodel.get("outputs"),n=t<a.length?t-e:a.length-e;this.transact((()=>{a.delete(e,n),a.insert(e,s)}),!1)}static create(e){const t=super.create(e);return t.ymodel.set("execution_count",0),t.ymodel.set("outputs",new r.Array),t}static createStandalone(e){const t=super.createStandalone(e);return t.ymodel.set("execution_count",null),t.ymodel.set("outputs",new r.Array),t}clone(){const e=super.clone(),t=new r.Array;return t.insert(0,this.getOutputs()),e.ymodel.set("execution_count",this.execution_count),e.ymodel.set("outputs",t),e}toJSON(){return{id:this.getId(),cell_type:"code",source:this.getSource(),metadata:this.getMetadata(),outputs:this.getOutputs(),execution_count:this.execution_count}}}class m extends g{static create(e){return super.create(e)}static createStandalone(e){return super.createStandalone(e)}get cell_type(){return"raw"}toJSON(){return{id:this.getId(),cell_type:"raw",source:this.getSource(),metadata:this.getMetadata(),attachments:this.getAttachments()}}}class p extends g{static create(e){return super.create(e)}static createStandalone(e){return super.createStandalone(e)}get cell_type(){return"markdown"}toJSON(){return{id:this.getId(),cell_type:"markdown",source:this.getSource(),metadata:this.getMetadata(),attachments:this.getAttachments()}}}function _(e){let t=new Map;return e.changes.keys.forEach(((e,s)=>{t.set(s,{action:e.action,oldValue:e.oldValue,newValue:this.ymeta.get(s)})})),t}const M=()=>{let e=!0;return t=>{if(e){e=!1;try{t()}finally{e=!0}}}}}}]);
//# sourceMappingURL=9934.0330010.js.map