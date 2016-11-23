"use strict";
var CurrentRecords = (function () {
    function CurrentRecords(current_page, items_per_page, total_items) {
        this.currentPage = current_page;
        this.itemsPerPage = items_per_page;
        this.totalItems = total_items;
    }
    /*
     * Count of current records
     */
    CurrentRecords.prototype.count = function () {
        return this.totalItems.slice((this.currentPage - 1) *
            this.itemsPerPage, this.currentPage * this.itemsPerPage);
    };
    return CurrentRecords;
}());
exports.CurrentRecords = CurrentRecords;
//# sourceMappingURL=current.records.js.map