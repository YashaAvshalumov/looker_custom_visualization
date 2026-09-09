looker.plugins.visualizations.add({
  id: "kpi_sparkline_conditional",
  label: "KPI with Conditional Sparkline",

  options: {

    // =====================================================
    // VALUE
    // =====================================================

    card_title: {
      type: "string",
      label: "Card Title",
      default: "",
      placeholder: "Defaults to the measure name",
      section: "Value",
      order: 1
    },

    show_title: {
      type: "boolean",
      label: "Show Title",
      default: true,
      section: "Value",
      order: 2
    },

    title_font_size: {
      type: "number",
      label: "Title Font Size",
      default: 14,
      section: "Value",
      order: 3
    },

    kpi_source: {
      type: "string",
      label: "KPI Value",
      default: "last",
      display: "select",
      values: [
        { "Last point": "last" },
        { "First point": "first" },
        { "Sum of points": "sum" },
        { "Average of points": "average" },
        { "Min of points": "min" },
        { "Max of points": "max" }
      ],
      section: "Value",
      order: 4
    },

    kpi_font_size: {
      type: "number",
      label: "KPI Font Size",
      default: 44,
      section: "Value",
      order: 5
    },

    kpi_color: {
      type: "string",
      label: "KPI Color",
      default: "#16325c",
      display: "color",
      section: "Value",
      order: 6
    },

    color_kpi_by_rules: {
      type: "boolean",
      label: "Color KPI By Formatting Rules",
      default: false,
      section: "Value",
      order: 7
    },

    text_align: {
      type: "string",
      label: "Text Alignment",
      default: "left",
      display: "select",
      values: [
        { "Left": "left" },
        { "Center": "center" },
        { "Right": "right" }
      ],
      section: "Value",
      order: 8
    },

    // =====================================================
    // COMPARISON
    // =====================================================

    show_comparison: {
      type: "boolean",
      label: "Show Comparison",
      default: true,
      section: "Comparison",
      order: 1
    },

    comparison_source: {
      type: "string",
      label: "Compare Against",
      default: "measure_2",
      display: "select",
      values: [
        { "Second measure (e.g. prior year)": "measure_2" },
        { "Previous point in series": "previous_point" },
        { "First point in series": "first_point" }
      ],
      section: "Comparison",
      order: 2
    },

    comparison_mode: {
      type: "string",
      label: "Comparison Display",
      default: "percent",
      display: "select",
      values: [
        { "Percent change": "percent" },
        { "Absolute change": "absolute" },
        { "Percentage point change": "points" }
      ],
      section: "Comparison",
      order: 3
    },

    comparison_label: {
      type: "string",
      label: "Comparison Label",
      default: "vs prior year",
      section: "Comparison",
      order: 4
    },

    compare_font_size: {
      type: "number",
      label: "Comparison Font Size",
      default: 14,
      section: "Comparison",
      order: 5
    },

    positive_values_bad: {
      type: "boolean",
      label: "Positive Change Is Bad",
      default: false,
      section: "Comparison",
      order: 6
    },

    show_prior_value: {
      type: "boolean",
      label: "Show Comparison Value",
      default: true,
      section: "Comparison",
      order: 7
    },

    // =====================================================
    // SPARKLINE
    // =====================================================

    show_sparkline: {
      type: "boolean",
      label: "Show Sparkline",
      default: true,
      section: "Sparkline",
      order: 1
    },

    chart_type: {
      type: "string",
      label: "Chart Type",
      default: "area",
      display: "select",
      values: [
        { "Area": "area" },
        { "Line": "line" },
        { "Bar": "column" }
      ],
      section: "Sparkline",
      order: 2
    },

    sparkline_height: {
      type: "number",
      label: "Sparkline Height (0 = fill card)",
      default: 0,
      section: "Sparkline",
      order: 3
    },

    line_width: {
      type: "number",
      label: "Line Width",
      default: 2,
      section: "Sparkline",
      order: 4
    },

    fill_opacity: {
      type: "number",
      label: "Area Fill Opacity (0-1)",
      default: 0.35,
      section: "Sparkline",
      order: 5
    },

    smooth_line: {
      type: "boolean",
      label: "Smooth Line",
      default: false,
      section: "Sparkline",
      order: 6
    },

    show_points: {
      type: "boolean",
      label: "Show Points",
      default: false,
      section: "Sparkline",
      order: 7
    },

    point_size: {
      type: "number",
      label: "Point Size",
      default: 3,
      section: "Sparkline",
      order: 8
    },

    highlight_last_point: {
      type: "boolean",
      label: "Highlight Last Point",
      default: true,
      section: "Sparkline",
      order: 9
    },

    bar_gap: {
      type: "number",
      label: "Bar Gap (0-0.9)",
      default: 0.25,
      section: "Sparkline",
      order: 10
    },

    y_axis_mode: {
      type: "string",
      label: "Y Axis Scale",
      default: "auto",
      display: "select",
      values: [
        { "Fit to data": "auto" },
        { "Start at zero": "zero" },
        { "Custom": "custom" }
      ],
      section: "Sparkline",
      order: 11
    },

    y_min: {
      type: "number",
      label: "Custom Y Min",
      default: 0,
      section: "Sparkline",
      order: 12
    },

    y_max: {
      type: "number",
      label: "Custom Y Max",
      default: 1,
      section: "Sparkline",
      order: 13
    },

    show_x_axis: {
      type: "boolean",
      label: "Show X-Axis Values",
      default: false,
      section: "Sparkline",
      order: 14
    },

    show_y_axis: {
      type: "boolean",
      label: "Show Y-Axis Values",
      default: false,
      section: "Sparkline",
      order: 15
    },

    x_axis_label_count: {
      type: "number",
      label: "Maximum X-Axis Labels",
      default: 4,
      section: "Sparkline",
      order: 16
    },

    y_axis_tick_count: {
      type: "number",
      label: "Y-Axis Tick Count",
      default: 3,
      section: "Sparkline",
      order: 17
    },

    axis_font_size: {
      type: "number",
      label: "Axis Font Size",
      default: 10,
      section: "Sparkline",
      order: 18
    },

    axis_color: {
      type: "string",
      label: "Axis Color",
      default: "#7b8794",
      display: "color",
      section: "Sparkline",
      order: 19
    },

    target_value: {
      type: "string",
      label: "Goal Line Value (blank = off)",
      default: "",
      placeholder: "e.g. 0.95",
      section: "Reference Lines",
      order: 1
    },

    target_color: {
      type: "string",
      label: "Goal Line Color",
      default: "#9aa5b1",
      display: "color",
      section: "Reference Lines",
      order: 2
    },

    target_label: {
      type: "string",
      label: "Goal Line Label",
      default: "Goal",
      section: "Reference Lines",
      order: 3
    },

    industry_range_min: {
      type: "string",
      label: "Industry Range Minimum (blank = off)",
      default: "",
      placeholder: "e.g. 0.90",
      section: "Reference Lines",
      order: 4
    },

    industry_range_max: {
      type: "string",
      label: "Industry Range Maximum (blank = off)",
      default: "",
      placeholder: "e.g. 0.95",
      section: "Reference Lines",
      order: 5
    },

    industry_range_label: {
      type: "string",
      label: "Industry Range Label",
      default: "Industry range",
      section: "Reference Lines",
      order: 6
    },

    industry_range_color: {
      type: "string",
      label: "Industry Range Color",
      default: "#64748b",
      display: "color",
      section: "Reference Lines",
      order: 7
    },

    industry_range_opacity: {
      type: "number",
      label: "Industry Range Fill Opacity (0-1)",
      default: 0.08,
      section: "Reference Lines",
      order: 8
    },

    show_reference_labels: {
      type: "boolean",
      label: "Show Reference Labels",
      default: true,
      section: "Reference Lines",
      order: 9
    },

    show_comparison_series: {
      type: "boolean",
      label: "Plot Comparison Series",
      default: false,
      section: "Sparkline",
      order: 20
    },

    comparison_series_color: {
      type: "string",
      label: "Comparison Series Color",
      default: "#9aa5b1",
      display: "color",
      section: "Sparkline",
      order: 21
    },

    data_order: {
      type: "string",
      label: "Data Order",
      default: "auto",
      display: "select",
      values: [
        { "Auto (oldest to newest)": "auto" },
        { "As queried": "as_queried" },
        { "Reverse of query": "reverse" }
      ],
      section: "Sparkline",
      order: 22
    },

    // =====================================================
    // CONDITIONAL FORMATTING
    // =====================================================

    color_mode: {
      type: "string",
      label: "Coloring",
      default: "rules",
      display: "select",
      values: [
        { "Conditional rules": "rules" },
        { "Single color": "single" }
      ],
      section: "Formatting",
      order: 1
    },

    default_color: {
      type: "string",
      label: "Default / No-Rule-Match Color",
      default: "#4276be",
      display: "color",
      section: "Formatting",
      order: 2
    },

    color_line_segments: {
      type: "boolean",
      label: "Color Line Segments (not just points)",
      default: true,
      section: "Formatting",
      order: 3
    },

    rule_values_are_percent: {
      type: "boolean",
      label: "Rule Values Are Percents (95 = 0.95)",
      default: false,
      section: "Formatting",
      order: 4
    },

    rule_1_op: {
      type: "string",
      label: "Rule 1",
      default: ">=",
      display: "select",
      values: [
        { "Off": "off" },
        { "Greater than or equal": ">=" },
        { "Greater than": ">" },
        { "Less than or equal": "<=" },
        { "Less than": "<" },
        { "Equal to": "=" },
        { "Between (inclusive)": "between" }
      ],
      section: "Formatting",
      order: 10
    },

    rule_1_value: {
      type: "number",
      label: "Rule 1 Value",
      default: 0.95,
      section: "Formatting",
      order: 11
    },

    rule_1_value2: {
      type: "number",
      label: "Rule 1 Upper Bound (Between only)",
      default: 0,
      section: "Formatting",
      order: 12
    },

    rule_1_color: {
      type: "string",
      label: "Rule 1 Color",
      default: "#16a34a",
      display: "color",
      section: "Formatting",
      order: 13
    },

    rule_2_op: {
      type: "string",
      label: "Rule 2",
      default: "between",
      display: "select",
      values: [
        { "Off": "off" },
        { "Greater than or equal": ">=" },
        { "Greater than": ">" },
        { "Less than or equal": "<=" },
        { "Less than": "<" },
        { "Equal to": "=" },
        { "Between (inclusive)": "between" }
      ],
      section: "Formatting",
      order: 20
    },

    rule_2_value: {
      type: "number",
      label: "Rule 2 Value",
      default: 0.9,
      section: "Formatting",
      order: 21
    },

    rule_2_value2: {
      type: "number",
      label: "Rule 2 Upper Bound (Between only)",
      default: 0.95,
      section: "Formatting",
      order: 22
    },

    rule_2_color: {
      type: "string",
      label: "Rule 2 Color",
      default: "#eab308",
      display: "color",
      section: "Formatting",
      order: 23
    },

    rule_3_op: {
      type: "string",
      label: "Rule 3",
      default: "<",
      display: "select",
      values: [
        { "Off": "off" },
        { "Greater than or equal": ">=" },
        { "Greater than": ">" },
        { "Less than or equal": "<=" },
        { "Less than": "<" },
        { "Equal to": "=" },
        { "Between (inclusive)": "between" }
      ],
      section: "Formatting",
      order: 30
    },

    rule_3_value: {
      type: "number",
      label: "Rule 3 Value",
      default: 0.9,
      section: "Formatting",
      order: 31
    },

    rule_3_value2: {
      type: "number",
      label: "Rule 3 Upper Bound (Between only)",
      default: 0,
      section: "Formatting",
      order: 32
    },

    rule_3_color: {
      type: "string",
      label: "Rule 3 Color",
      default: "#dc2626",
      display: "color",
      section: "Formatting",
      order: 33
    },

    rule_4_op: {
      type: "string",
      label: "Rule 4",
      default: "off",
      display: "select",
      values: [
        { "Off": "off" },
        { "Greater than or equal": ">=" },
        { "Greater than": ">" },
        { "Less than or equal": "<=" },
        { "Less than": "<" },
        { "Equal to": "=" },
        { "Between (inclusive)": "between" }
      ],
      section: "Formatting",
      order: 40
    },

    rule_4_value: {
      type: "number",
      label: "Rule 4 Value",
      default: 0,
      section: "Formatting",
      order: 41
    },

    rule_4_value2: {
      type: "number",
      label: "Rule 4 Upper Bound (Between only)",
      default: 0,
      section: "Formatting",
      order: 42
    },

    rule_4_color: {
      type: "string",
      label: "Rule 4 Color",
      default: "#7c3aed",
      display: "color",
      section: "Formatting",
      order: 43
    },

    rule_5_op: {
      type: "string",
      label: "Rule 5",
      default: "off",
      display: "select",
      values: [
        { "Off": "off" },
        { "Greater than or equal": ">=" },
        { "Greater than": ">" },
        { "Less than or equal": "<=" },
        { "Less than": "<" },
        { "Equal to": "=" },
        { "Between (inclusive)": "between" }
      ],
      section: "Formatting",
      order: 50
    },

    rule_5_value: {
      type: "number",
      label: "Rule 5 Value",
      default: 0,
      section: "Formatting",
      order: 51
    },

    rule_5_value2: {
      type: "number",
      label: "Rule 5 Upper Bound (Between only)",
      default: 0,
      section: "Formatting",
      order: 52
    },

    rule_5_color: {
      type: "string",
      label: "Rule 5 Color",
      default: "#0891b2",
      display: "color",
      section: "Formatting",
      order: 53
    },

    rules_text: {
      type: "string",
      label: "Advanced Rules (overrides Rules 1-5)",
      default: "",
      placeholder: ">=0.95:#16a34a; 0.9..0.95:#eab308; <0.9:#dc2626",
      section: "Formatting",
      order: 60
    }
  },

  // =====================================================
  // CREATE
  // =====================================================

  create: function (element) {

    element.innerHTML = `
      <style>

        .ksc-card * {
          box-sizing: border-box;
          font-family: Roboto, "Open Sans", Arial, sans-serif;
        }

        .ksc-card {
          width: 100%;
          height: 100%;
          padding: 12px 14px;
          background: transparent;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-sizing: border-box;
          position: relative;
        }

        .ksc-title {
          color: #5f6b7a;
          font-weight: 500;
          line-height: 1.2;
          margin-bottom: 4px;
          word-break: break-word;
        }

        .ksc-value {
          font-weight: 700;
          line-height: 1.1;
          word-break: break-word;
        }

        .ksc-compare-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 6px;
        }

        .ksc-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 2px 8px;
          border-radius: 6px;
          font-weight: 700;
          white-space: nowrap;
        }

        .ksc-badge.up {
          color: #16a34a;
          background: #eaf7ee;
        }

        .ksc-badge.down {
          color: #dc2626;
          background: #fdecec;
        }

        .ksc-badge.flat {
          color: #5f6b7a;
          background: #f1f3f5;
        }

        .ksc-compare-label {
          color: #5f6b7a;
          font-weight: 500;
          min-width: 0;
          word-break: break-word;
        }

        .ksc-spark {
          width: 100%;
          min-height: 0;
          margin-top: 10px;
          position: relative;
        }

        .ksc-spark svg {
          display: block;
          overflow: visible;
        }

        .ksc-drillable {
          cursor: pointer;
        }

        .ksc-tooltip {
          position: absolute;
          pointer-events: none;
          background: rgba(38, 45, 51, 0.94);
          color: #ffffff;
          border-radius: 6px;
          padding: 6px 9px;
          font-size: 12px;
          line-height: 1.45;
          white-space: nowrap;
          transform: translate(-50%, -115%);
          opacity: 0;
          transition: opacity 0.08s ease;
          z-index: 10;
        }

        .ksc-tooltip.visible {
          opacity: 1;
        }

        .ksc-tooltip-key {
          font-weight: 700;
          margin-bottom: 2px;
        }

        .ksc-swatch {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 2px;
          margin-right: 5px;
          vertical-align: middle;
        }

        .ksc-error {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .ksc-error-box {
          width: 100%;
          border: 1px solid #fecaca;
          background: #fef2f2;
          color: #dc2626;
          border-radius: 10px;
          padding: 16px;
          font-size: 13px;
          line-height: 1.6;
        }

        .ksc-error-title {
          font-weight: 700;
          margin-bottom: 6px;
        }

      </style>

      <div id="ksc-root" style="width:100%;height:100%;"></div>
    `;
  },

  // =====================================================
  // UPDATE
  // =====================================================

  updateAsync: function (data, element, config, queryResponse, details, done) {

    const root = element.querySelector("#ksc-root");

    try {

      // ---------------------------------------------------
      // Validation
      // ---------------------------------------------------

      const dimensions = queryResponse.fields.dimension_like || [];
      const measures = queryResponse.fields.measure_like || [];
      const pivots = queryResponse.fields.pivots || [];

      if (pivots.length > 0) {
        renderError(
          root,
          "Pivots are not supported",
          "Remove the pivot and add a second measure instead to plot a comparison series."
        );
        done();
        return;
      }

      if (dimensions.length < 1 || measures.length < 1) {
        renderError(
          root,
          "This visualization requires:",
          "&bull; 1 dimension (usually a date)<br>&bull; 1 measure (the sparkline series)<br>&bull; optionally a 2nd measure (the comparison series)"
        );
        done();
        return;
      }

      if (!data || data.length === 0) {
        renderError(root, "No data", "The query returned no rows.");
        done();
        return;
      }

      const dimension = dimensions[0];
      const measure = measures[0];
      const compareMeasure = measures[1] || null;

      // ---------------------------------------------------
      // Row ordering
      // ---------------------------------------------------

      const rows = orderRows(data, dimension, config.data_order || "auto");

      // ---------------------------------------------------
      // Series extraction
      // ---------------------------------------------------

      const points = rows.map((row, i) => {

        const dimCell = row[dimension.name] || {};
        const cell = row[measure.name] || {};
        const compCell = compareMeasure ? (row[compareMeasure.name] || {}) : null;

        return {
          index: i,
          label: cellText(dimCell),
          value: cellNumber(cell),
          cell: cell,
          compareValue: compCell ? cellNumber(compCell) : null,
          compareCell: compCell
        };
      });

      const hasAnyValue = points.some(p => p.value !== null);

      if (!hasAnyValue) {
        renderError(root, "No numeric values", "The selected measure returned only null values.");
        done();
        return;
      }

      // ---------------------------------------------------
      // Conditional formatting rules
      // ---------------------------------------------------

      const rules =
        (config.color_mode || "rules") === "rules"
          ? buildRules(config)
          : [];

      const defaultColor = config.default_color || "#4276be";

      points.forEach(p => {
        p.color = p.value === null
          ? defaultColor
          : colorForValue(p.value, rules, defaultColor);
      });

      // ---------------------------------------------------
      // KPI value + comparison
      // ---------------------------------------------------

      const kpi = resolveKpi(points, config.kpi_source || "last");
      const comparison = resolveComparison(points, kpi, config, compareMeasure);

      // ---------------------------------------------------
      // Shell
      // ---------------------------------------------------

      const align = config.text_align || "left";

      root.innerHTML = `
        <div class="ksc-card" style="text-align:${align};">
          <div id="ksc-title" class="ksc-title"></div>
          <div id="ksc-value" class="ksc-value"></div>
          <div id="ksc-compare" class="ksc-compare-row"></div>
          <div id="ksc-spark" class="ksc-spark"></div>
        </div>
      `;

      const card = root.querySelector(".ksc-card");
      const titleEl = root.querySelector("#ksc-title");
      const valueEl = root.querySelector("#ksc-value");
      const compareEl = root.querySelector("#ksc-compare");
      const sparkEl = root.querySelector("#ksc-spark");

      const justify =
        align === "center" ? "center" :
        align === "right" ? "flex-end" : "flex-start";

      compareEl.style.justifyContent = justify;

      // ---------------------------------------------------
      // Title
      // ---------------------------------------------------

      if (config.show_title === false) {
        titleEl.style.display = "none";
      } else {
        titleEl.textContent =
          config.card_title || measure.label_short || measure.label || "";
        titleEl.style.fontSize = px(config.title_font_size, 14);
      }

      // ---------------------------------------------------
      // KPI value
      // ---------------------------------------------------

      valueEl.textContent = kpi.formatted;
      valueEl.style.fontSize = px(config.kpi_font_size, 44);

      valueEl.style.color =
        config.color_kpi_by_rules && kpi.value !== null
          ? colorForValue(kpi.value, rules, config.kpi_color || "#16325c")
          : (config.kpi_color || "#16325c");

      attachDrill(valueEl, kpi.cell);

      // ---------------------------------------------------
      // Comparison row
      // ---------------------------------------------------

      if (config.show_comparison === false || !comparison) {

        compareEl.style.display = "none";

      } else {

        const compareFont = px(config.compare_font_size, 14);

        const state =
          comparison.delta === null ? "flat" :
          comparison.isGood ? "up" : "down";

        const arrow =
          comparison.delta === null || comparison.delta === 0 ? "" :
          comparison.delta > 0 ? "\u25B2 " : "\u25BC ";

        const parts = [];

        parts.push(
          `<span class="ksc-badge ${state}" style="font-size:${compareFont};">` +
          `${arrow}${escapeHtml(comparison.text)}</span>`
        );

        if (config.comparison_label) {
          parts.push(
            `<span class="ksc-compare-label" style="font-size:${compareFont};">` +
            `${escapeHtml(config.comparison_label)}</span>`
          );
        }

        if (config.show_prior_value !== false && comparison.baseFormatted) {
          parts.push(
            `<span class="ksc-compare-label" id="ksc-prior" style="font-size:${compareFont};">` +
            `(${escapeHtml(comparison.baseFormatted)})</span>`
          );
        }

        compareEl.innerHTML = parts.join(" ");

        attachDrill(compareEl.querySelector("#ksc-prior"), comparison.baseCell);
      }

      // ---------------------------------------------------
      // Sparkline
      // ---------------------------------------------------

      if (config.show_sparkline === false) {

        sparkEl.style.display = "none";
        detachResizeObserver(element);

      } else {

        const fixedHeight = num(config.sparkline_height, 0);

        if (fixedHeight > 0) {
          sparkEl.style.flex = "0 0 auto";
          sparkEl.style.height = fixedHeight + "px";
        } else {
          sparkEl.style.flex = "1 1 auto";
          sparkEl.style.height = "auto";
        }

        const renderState = {
          host: sparkEl,
          points: points,
          config: config,
          defaultColor: defaultColor,
          measure: measure,
          compareMeasure: compareMeasure,
          dimension: dimension
        };

        drawSparkline(renderState);
        observeResize(element, card, renderState);
      }

      done();

    } catch (err) {

      renderError(root, "Visualization error", escapeHtml(err && err.message ? err.message : String(err)));
      done();
    }

    // =====================================================
    // ROW ORDERING
    // =====================================================

    function orderRows(rawRows, dimensionField, mode) {

      const copy = rawRows.slice();

      if (mode === "as_queried") {
        return copy;
      }

      if (mode === "reverse") {
        return copy.reverse();
      }

      // Auto: sort ascending when the dimension is sortable as a date or a
      // number, otherwise leave the query order untouched.
      const type = String(dimensionField.type || "");
      const isTime = /date|time|week|month|quarter|year/i.test(type);

      const keyed = copy.map((row, i) => {

        const cell = row[dimensionField.name] || {};
        const raw = cell.value;

        let key = null;

        if (raw !== null && raw !== undefined && raw !== "") {
          if (isTime) {
            const parsed = Date.parse(raw);
            key = isNaN(parsed) ? null : parsed;
          } else if (isFinite(Number(raw))) {
            key = Number(raw);
          }
        }

        return { row: row, key: key, i: i };
      });

      if (keyed.some(k => k.key === null)) {
        return copy;
      }

      keyed.sort((a, b) => (a.key - b.key) || (a.i - b.i));

      return keyed.map(k => k.row);
    }

    // =====================================================
    // RULES
    // =====================================================

    function buildRules(cfg) {

      const scale = cfg.rule_values_are_percent ? 0.01 : 1;
      const text = String(cfg.rules_text || "").trim();

      if (text) {
        return parseRulesText(text, scale);
      }

      const built = [];

      for (let i = 1; i <= 5; i++) {

        const op = cfg["rule_" + i + "_op"];

        if (!op || op === "off") {
          continue;
        }

        const v1 = num(cfg["rule_" + i + "_value"], null);
        const v2 = num(cfg["rule_" + i + "_value2"], null);
        const color = cfg["rule_" + i + "_color"];

        if (v1 === null || !color) {
          continue;
        }

        built.push({
          op: op,
          v1: v1 * scale,
          v2: v2 === null ? null : v2 * scale,
          color: color
        });
      }

      return built;
    }

    // Parses "  >=0.95:#16a34a; 0.9..0.95:#eab308; <90%:#dc2626  "
    function parseRulesText(text, scale) {

      return text
        .split(/[;\n]/)
        .map(entry => entry.trim())
        .filter(Boolean)
        .map(entry => {

          const split = entry.lastIndexOf(":");

          if (split === -1) {
            return null;
          }

          const condition = entry.slice(0, split).trim();
          const color = entry.slice(split + 1).trim();

          if (!color) {
            return null;
          }

          const range = condition.match(
            /^(-?[\d.]+%?)\s*(?:\.\.|to)\s*(-?[\d.]+%?)$/i
          );

          if (range) {

            // "90..95%" only marks the upper bound, so a % on either end
            // puts both bounds on the percent scale.
            const rangeScale =
              (/%$/.test(range[1]) || /%$/.test(range[2])) ? 0.01 : scale;

            return {
              op: "between",
              v1: parseRuleNumber(range[1], rangeScale, true),
              v2: parseRuleNumber(range[2], rangeScale, true),
              color: color
            };
          }

          const compare = condition.match(/^(>=|<=|>|<|=)\s*(-?[\d.]+%?)$/);

          if (compare) {
            return {
              op: compare[1],
              v1: parseRuleNumber(compare[2], scale),
              v2: null,
              color: color
            };
          }

          return null;
        })
        .filter(rule => rule && rule.v1 !== null && !isNaN(rule.v1));
    }

    function parseRuleNumber(token, scale, scaleIsResolved) {

      const isPercentLiteral = /%$/.test(token);
      const parsed = Number(String(token).replace("%", ""));

      if (!isFinite(parsed)) {
        return null;
      }

      if (scaleIsResolved) {
        return parsed * scale;
      }

      // A trailing % always means "divide by 100"; otherwise fall back to the
      // global scale toggle.
      return isPercentLiteral ? parsed / 100 : parsed * scale;
    }

    // First matching rule wins, so ordering in the editor is meaningful.
    function colorForValue(value, ruleList, fallback) {

      for (let i = 0; i < ruleList.length; i++) {

        const rule = ruleList[i];

        if (matchesRule(value, rule)) {
          return rule.color;
        }
      }

      return fallback;
    }

    function matchesRule(value, rule) {

      switch (rule.op) {
        case ">=": return value >= rule.v1;
        case ">": return value > rule.v1;
        case "<=": return value <= rule.v1;
        case "<": return value < rule.v1;
        case "=": return value === rule.v1;
        case "between": {
          const lo = Math.min(rule.v1, rule.v2 === null ? rule.v1 : rule.v2);
          const hi = Math.max(rule.v1, rule.v2 === null ? rule.v1 : rule.v2);
          return value >= lo && value <= hi;
        }
        default: return false;
      }
    }

    // =====================================================
    // KPI + COMPARISON RESOLUTION
    // =====================================================

    function resolveKpi(series, source) {

      const valued = series.filter(p => p.value !== null);

      if (valued.length === 0) {
        return { value: null, formatted: "\u2013", cell: null, point: null };
      }

      if (source === "first" || source === "last") {

        const point = source === "first" ? valued[0] : valued[valued.length - 1];

        return {
          value: point.value,
          formatted: cellText(point.cell),
          cell: point.cell,
          point: point
        };
      }

      const values = valued.map(p => p.value);

      let aggregate;

      switch (source) {
        case "sum":
          aggregate = values.reduce((a, b) => a + b, 0);
          break;
        case "average":
          aggregate = values.reduce((a, b) => a + b, 0) / values.length;
          break;
        case "min":
          aggregate = Math.min.apply(null, values);
          break;
        case "max":
          aggregate = Math.max.apply(null, values);
          break;
        default:
          aggregate = values[values.length - 1];
      }

      return {
        value: aggregate,
        formatted: formatNumber(aggregate),
        cell: null,
        point: null
      };
    }

    function resolveComparison(series, kpiResult, cfg, compareField) {

      if (kpiResult.value === null) {
        return null;
      }

      const source = cfg.comparison_source || "measure_2";
      const valued = series.filter(p => p.value !== null);

      let baseValue = null;
      let baseCell = null;

      if (source === "measure_2") {

        if (!compareField) {
          return null;
        }

        if (kpiResult.point) {

          baseValue = kpiResult.point.compareValue;
          baseCell = kpiResult.point.compareCell;

        } else {

          // Aggregated KPI: aggregate the comparison measure the same way.
          const compValues = valued
            .map(p => p.compareValue)
            .filter(v => v !== null);

          if (compValues.length === 0) {
            return null;
          }

          baseValue = aggregateLike(compValues, cfg.kpi_source || "last");
        }

      } else if (source === "previous_point") {

        const anchor = valued.indexOf(kpiResult.point);
        const prior = anchor > 0 ? valued[anchor - 1] : valued[valued.length - 2];

        if (!prior) {
          return null;
        }

        baseValue = prior.value;
        baseCell = prior.cell;

      } else if (source === "first_point") {

        const first = valued[0];

        if (!first || first === kpiResult.point) {
          return null;
        }

        baseValue = first.value;
        baseCell = first.cell;
      }

      if (baseValue === null || baseValue === undefined || isNaN(baseValue)) {
        return null;
      }

      const delta = kpiResult.value - baseValue;
      const mode = cfg.comparison_mode || "percent";

      let text;

      if (mode === "absolute") {

        text = formatNumber(Math.abs(delta));

      } else if (mode === "points") {

        text = (Math.abs(delta) * 100).toFixed(1) + " pts";

      } else {

        text = baseValue === 0
          ? "\u2013"
          : (Math.abs(delta / baseValue) * 100).toFixed(1) + "%";
      }

      const isPositive = delta >= 0;

      const isGood = cfg.positive_values_bad ? !isPositive : isPositive;

      return {
        delta: baseValue === 0 && mode === "percent" ? null : delta,
        text: text,
        isGood: isGood,
        baseValue: baseValue,
        baseCell: baseCell,
        baseFormatted: baseCell ? cellText(baseCell) : formatNumber(baseValue)
      };
    }

    function aggregateLike(values, source) {

      switch (source) {
        case "first": return values[0];
        case "sum": return values.reduce((a, b) => a + b, 0);
        case "average": return values.reduce((a, b) => a + b, 0) / values.length;
        case "min": return Math.min.apply(null, values);
        case "max": return Math.max.apply(null, values);
        default: return values[values.length - 1];
      }
    }

    // =====================================================
    // SPARKLINE RENDERING
    // =====================================================

    function drawSparkline(state) {

      const host = state.host;
      const cfg = state.config;
      const series = state.points;

      const rect = host.getBoundingClientRect();
      const width = Math.floor(rect.width);
      const height = Math.floor(rect.height);

      if (width < 8 || height < 8) {
        host.innerHTML = "";
        return;
      }

      const chartType = cfg.chart_type || "area";
      const lineWidth = Math.max(0.5, num(cfg.line_width, 2));
      const pointSize = Math.max(1, num(cfg.point_size, 3));
      const fillOpacity = clamp(num(cfg.fill_opacity, 0.35), 0, 1);
      const showPoints = cfg.show_points === true;
      const showXAxis = cfg.show_x_axis === true;
      const showYAxis = cfg.show_y_axis === true;
      const axisFontSize = Math.max(8, num(cfg.axis_font_size, 10));
      const axisColor = cfg.axis_color || "#7b8794";
      const pointPadding = Math.max(lineWidth, showPoints ? pointSize + 1 : 2);
      const plotLeft = pointPadding + (showYAxis ? Math.max(38, axisFontSize * 4.5) : 0);
      const plotRight = width - pointPadding;
      const plotTop = pointPadding;
      const plotBottom = height - pointPadding - (showXAxis ? axisFontSize + 10 : 0);
      const innerW = Math.max(1, plotRight - plotLeft);
      const innerH = Math.max(1, plotBottom - plotTop);

      // --- Y domain -------------------------------------------------------

      const plotted = series.map(p => p.value).filter(v => v !== null);

      const compPlotted = cfg.show_comparison_series
        ? series.map(p => p.compareValue).filter(v => v !== null && v !== undefined)
        : [];

      const allValues = plotted.concat(compPlotted);

      const target = num(cfg.target_value, null);
      const industryMinRaw = num(cfg.industry_range_min, null);
      const industryMaxRaw = num(cfg.industry_range_max, null);
      const hasIndustryRange =
        industryMinRaw !== null &&
        industryMaxRaw !== null;
      const industryMin = hasIndustryRange
        ? Math.min(industryMinRaw, industryMaxRaw)
        : null;
      const industryMax = hasIndustryRange
        ? Math.max(industryMinRaw, industryMaxRaw)
        : null;

      if (target !== null) {
        allValues.push(target);
      }

      if (hasIndustryRange) {
        allValues.push(industryMin, industryMax);
      }

      let yMin = Math.min.apply(null, allValues);
      let yMax = Math.max.apply(null, allValues);

      const mode = cfg.y_axis_mode || "auto";

      if (mode === "custom") {

        yMin = num(cfg.y_min, yMin);
        yMax = num(cfg.y_max, yMax);

      } else if (mode === "zero") {

        yMin = Math.min(0, yMin);
        yMax = Math.max(0, yMax);

      } else if (chartType === "column" && yMin > 0) {

        // Bars are measured from the bottom of the domain, so a domain that
        // starts exactly at the smallest value renders it as a zero-height
        // bar. Drop the floor slightly to keep every bar readable.
        yMin -= (yMax - yMin) * 0.15;
      }

      if (!isFinite(yMin) || !isFinite(yMax)) {
        host.innerHTML = "";
        return;
      }

      if (yMin === yMax) {
        const nudge = Math.abs(yMin) > 0 ? Math.abs(yMin) * 0.1 : 1;
        yMin -= nudge;
        yMax += nudge;
      }

      const yFor = v => plotTop + (1 - (v - yMin) / (yMax - yMin)) * innerH;

      // Bars and areas rest on zero when zero is inside the domain.
      const baselineValue = (yMin <= 0 && yMax >= 0) ? 0 : yMin;
      const baselineY = yFor(baselineValue);

      // --- X positions ----------------------------------------------------

      const n = series.length;
      const band = innerW / Math.max(1, n);
      const step = n > 1 ? innerW / (n - 1) : 0;

      const xFor = i => chartType === "column"
        ? plotLeft + band * (i + 0.5)
        : (n === 1 ? plotLeft + innerW / 2 : plotLeft + step * i);

      series.forEach((p, i) => {
        p.x = xFor(i);
        p.y = p.value === null ? null : yFor(p.value);
      });

      // --- SVG ------------------------------------------------------------

      const uid = "ksc" + Math.random().toString(36).slice(2, 9);
      const svg = [];

      svg.push(
        `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" ` +
        `preserveAspectRatio="none" role="img">`
      );

      // Industry-standard range is rendered behind every series.
      if (hasIndustryRange) {

        const rangeTop = yFor(Math.min(yMax, industryMax));
        const rangeBottom = yFor(Math.max(yMin, industryMin));
        const rangeHeight = Math.max(0, rangeBottom - rangeTop);
        const rangeColor = cfg.industry_range_color || "#64748b";

        if (rangeHeight > 0) {
          svg.push(
            `<rect x="${plotLeft}" y="${rangeTop}" width="${innerW}" height="${rangeHeight}" ` +
            `fill="${escapeAttr(rangeColor)}" ` +
            `fill-opacity="${clamp(num(cfg.industry_range_opacity, 0.08), 0, 1)}"/>`
          );
        }
      }

      // Comparison series sits behind the primary series.
      if (cfg.show_comparison_series && compPlotted.length > 0) {

        const compPoints = series
          .map((p, i) => ({
            x: xFor(i),
            y: (p.compareValue === null || p.compareValue === undefined)
              ? null
              : yFor(p.compareValue)
          }));

        const compSegments = splitSegments(compPoints);

        compSegments.forEach(seg => {
          svg.push(
            `<path d="${buildLinePath(seg, cfg.smooth_line, plotTop, plotBottom)}" ` +
            `fill="none" stroke="${escapeAttr(cfg.comparison_series_color || "#9aa5b1")}" ` +
            `stroke-width="${Math.max(1, lineWidth - 0.5)}" stroke-dasharray="4 3" ` +
            `stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>`
          );
        });
      }

      if (chartType === "column") {

        svg.push(renderColumns(series, {
          band: band,
          gap: clamp(num(cfg.bar_gap, 0.25), 0, 0.9),
          baselineY: baselineY,
          minHeight: 1
        }));

      } else {

        const segments = splitSegments(series.map(p => ({ x: p.x, y: p.y })));

        const linePath = segments
          .map(seg => buildLinePath(seg, cfg.smooth_line, plotTop, plotBottom))
          .join(" ");

        const areaPath = segments
          .map(seg => buildAreaPath(seg, cfg.smooth_line, plotTop, plotBottom, baselineY))
          .join(" ");

        // Colour runs are the contiguous stretches of points that share a
        // rule colour; drawing the full path once per run and clipping it to
        // that run's x-slice is what makes each point read as its own colour.
        const runs = buildColorRuns(series, xFor, plotLeft, plotRight);

        svg.push("<defs>");

        runs.forEach((run, i) => {
          svg.push(
            `<clipPath id="${uid}-r${i}">` +
            `<rect x="${run.x0}" y="0" width="${Math.max(0, run.x1 - run.x0)}" height="${height}"/>` +
            `</clipPath>`
          );
        });

        svg.push("</defs>");

        if (chartType === "area" && areaPath) {
          runs.forEach((run, i) => {
            svg.push(
              `<g clip-path="url(#${uid}-r${i})">` +
              `<path d="${areaPath}" fill="${escapeAttr(run.color)}" ` +
              `fill-opacity="${fillOpacity}" stroke="none"/></g>`
            );
          });
        }

        if (linePath && lineWidth > 0) {

          if (cfg.color_line_segments === false) {

            svg.push(
              `<path d="${linePath}" fill="none" ` +
              `stroke="${escapeAttr(state.defaultColor)}" stroke-width="${lineWidth}" ` +
              `stroke-linecap="round" stroke-linejoin="round"/>`
            );

          } else {

            runs.forEach((run, i) => {
              svg.push(
                `<g clip-path="url(#${uid}-r${i})">` +
                `<path d="${linePath}" fill="none" stroke="${escapeAttr(run.color)}" ` +
                `stroke-width="${lineWidth}" stroke-linecap="butt" stroke-linejoin="round"/></g>`
              );
            });
          }
        }
      }

      // Draw reference boundaries above the data so they remain visible on
      // bar charts as well as line and area charts.
      if (hasIndustryRange) {
        const rangeColor = cfg.industry_range_color || "#64748b";

        [industryMin, industryMax].forEach(value => {
          if (value >= yMin && value <= yMax) {
            const ry = yFor(value);
            svg.push(
              `<line x1="${plotLeft}" y1="${ry}" x2="${plotRight}" y2="${ry}" ` +
              `stroke="${escapeAttr(rangeColor)}" stroke-width="1" ` +
              `stroke-dasharray="2 3" opacity="0.8"/>`
            );
          }
        });
      }

      if (target !== null && target >= yMin && target <= yMax) {
        const ty = yFor(target);
        svg.push(
          `<line x1="${plotLeft}" y1="${ty}" x2="${plotRight}" y2="${ty}" ` +
          `stroke="${escapeAttr(cfg.target_color || "#9aa5b1")}" stroke-width="1" ` +
          `stroke-dasharray="5 3"/>`
        );
      }

      // --- Points ---------------------------------------------------------

      const lastValued = lastValuedPoint(series);

      series.forEach(p => {

        if (p.y === null) {
          return;
        }

        // A marker on top of a bar reads as a stray dot, so the last-point
        // highlight only applies to line and area.
        const isLast =
          cfg.highlight_last_point !== false &&
          chartType !== "column" &&
          p === lastValued;

        if (!showPoints && !isLast) {
          return;
        }

        const r = isLast ? pointSize + 1 : pointSize;

        svg.push(
          `<circle cx="${p.x}" cy="${p.y}" r="${r}" fill="${escapeAttr(p.color)}" ` +
          `stroke="#ffffff" stroke-width="${isLast ? 1.5 : 1}"/>`
        );
      });

      // --- Axes and reference labels -------------------------------------

      if (showYAxis) {
        svg.push(renderYAxis({
          yMin: yMin,
          yMax: yMax,
          yFor: yFor,
          plotLeft: plotLeft,
          plotRight: plotRight,
          plotTop: plotTop,
          plotBottom: plotBottom,
          tickCount: Math.max(2, Math.round(num(cfg.y_axis_tick_count, 3))),
          fontSize: axisFontSize,
          color: axisColor,
          series: series
        }));
      }

      if (showXAxis) {
        svg.push(renderXAxis({
          series: series,
          xFor: xFor,
          plotLeft: plotLeft,
          plotRight: plotRight,
          plotBottom: plotBottom,
          maxLabels: Math.max(2, Math.round(num(cfg.x_axis_label_count, 4))),
          fontSize: axisFontSize,
          color: axisColor
        }));
      }

      if (cfg.show_reference_labels !== false) {

        const labelX = plotRight - 3;
        const referenceFontSize = Math.max(8, axisFontSize);

        if (hasIndustryRange) {
          const middle = (industryMin + industryMax) / 2;
          if (middle >= yMin && middle <= yMax) {
            const rangeText =
              (cfg.industry_range_label || "Industry range") + " " +
              formatAxisRange(industryMin, industryMax, series);
            svg.push(renderReferenceLabel(
              labelX,
              yFor(middle),
              rangeText,
              cfg.industry_range_color || "#64748b",
              referenceFontSize
            ));
          }
        }

        if (target !== null && target >= yMin && target <= yMax) {
          const targetText =
            (cfg.target_label || "Goal") + " " +
            formatAxisValue(target, series);
          svg.push(renderReferenceLabel(
            labelX,
            yFor(target),
            targetText,
            cfg.target_color || "#9aa5b1",
            referenceFontSize
          ));
        }
      }

      // --- Hover layer ----------------------------------------------------

      svg.push(
        `<rect id="${uid}-hit" x="0" y="0" width="${width}" height="${height}" ` +
        `fill="transparent" style="cursor:default;"/>`
      );

      svg.push("</svg>");

      host.innerHTML = svg.join("") + `<div class="ksc-tooltip" id="${uid}-tip"></div>`;

      wireInteractions(host, state, {
        uid: uid,
        width: width,
        padX: plotLeft,
        step: step,
        band: band,
        chartType: chartType,
        count: n
      });
    }

    function renderColumns(series, opts) {

      const barWidth = Math.max(1, opts.band * (1 - opts.gap));
      const out = [];

      series.forEach(p => {

        if (p.y === null) {
          return;
        }

        const top = Math.min(p.y, opts.baselineY);
        const h = Math.max(opts.minHeight, Math.abs(opts.baselineY - p.y));

        out.push(
          `<rect x="${p.x - barWidth / 2}" y="${top}" width="${barWidth}" height="${h}" ` +
          `fill="${escapeAttr(p.color)}" rx="1"/>`
        );
      });

      return out.join("");
    }

    function renderYAxis(opts) {

      const out = [];
      const count = opts.tickCount;

      out.push(
        `<line x1="${opts.plotLeft}" y1="${opts.plotTop}" ` +
        `x2="${opts.plotLeft}" y2="${opts.plotBottom}" ` +
        `stroke="${escapeAttr(opts.color)}" stroke-width="0.75" opacity="0.65"/>`
      );

      for (let i = 0; i < count; i++) {

        const ratio = count === 1 ? 0 : i / (count - 1);
        const value = opts.yMax - ratio * (opts.yMax - opts.yMin);
        const y = opts.yFor(value);

        out.push(
          `<line x1="${opts.plotLeft - 3}" y1="${y}" ` +
          `x2="${opts.plotLeft}" y2="${y}" ` +
          `stroke="${escapeAttr(opts.color)}" stroke-width="0.75"/>`
        );

        out.push(
          `<text x="${opts.plotLeft - 6}" y="${y}" ` +
          `text-anchor="end" dominant-baseline="middle" ` +
          `font-size="${opts.fontSize}" fill="${escapeAttr(opts.color)}">` +
          `${escapeHtml(formatAxisValue(value, opts.series))}</text>`
        );
      }

      return out.join("");
    }

    function renderXAxis(opts) {

      const out = [];
      const indices = sampledIndices(opts.series.length, opts.maxLabels);
      const labelY = opts.plotBottom + opts.fontSize + 6;

      out.push(
        `<line x1="${opts.plotLeft}" y1="${opts.plotBottom}" ` +
        `x2="${opts.plotRight}" y2="${opts.plotBottom}" ` +
        `stroke="${escapeAttr(opts.color)}" stroke-width="0.75" opacity="0.65"/>`
      );

      indices.forEach((index, position) => {

        const x = opts.xFor(index);
        const anchor =
          position === 0 ? "start" :
          position === indices.length - 1 ? "end" :
          "middle";

        out.push(
          `<line x1="${x}" y1="${opts.plotBottom}" ` +
          `x2="${x}" y2="${opts.plotBottom + 3}" ` +
          `stroke="${escapeAttr(opts.color)}" stroke-width="0.75"/>`
        );

        out.push(
          `<text x="${x}" y="${labelY}" text-anchor="${anchor}" ` +
          `font-size="${opts.fontSize}" fill="${escapeAttr(opts.color)}">` +
          `${escapeHtml(opts.series[index].label)}</text>`
        );
      });

      return out.join("");
    }

    function sampledIndices(length, maxLabels) {

      if (length <= 0) {
        return [];
      }

      if (length <= maxLabels) {
        return Array.from({ length: length }, (_, i) => i);
      }

      const indices = [];

      for (let i = 0; i < maxLabels; i++) {
        indices.push(Math.round(i * (length - 1) / (maxLabels - 1)));
      }

      return indices.filter((value, index) => index === 0 || value !== indices[index - 1]);
    }

    function renderReferenceLabel(x, y, text, color, fontSize) {

      return (
        `<text x="${x}" y="${y - 3}" text-anchor="end" ` +
        `font-size="${fontSize}" font-weight="600" ` +
        `fill="${escapeAttr(color)}" stroke="#ffffff" stroke-width="3" ` +
        `paint-order="stroke" stroke-linejoin="round">` +
        `${escapeHtml(text)}</text>`
      );
    }

    function formatAxisRange(min, max, series) {
      return formatAxisValue(min, series) + "\u2013" + formatAxisValue(max, series);
    }

    function formatAxisValue(value, series) {

      const sample = series.find(point => {
        if (!point.cell) {
          return false;
        }

        const rendered = cellText(point.cell);
        return rendered !== "";
      });

      const rendered = sample ? cellText(sample.cell) : "";

      if (/%/.test(rendered)) {
        return (value * 100).toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 1
        }) + "%";
      }

      const currency = rendered.match(/^\s*([$£€¥])/);

      if (currency) {
        return currency[1] + formatNumber(value);
      }

      return formatNumber(value);
    }

    // Groups adjacent points that resolved to the same colour so a 400-point
    // series does not produce 400 clip paths.
    function buildColorRuns(series, xFor, plotLeft, plotRight) {

      const runs = [];

      series.forEach((p, i) => {

        const last = runs[runs.length - 1];

        if (last && last.color === p.color) {
          last.end = i;
        } else {
          runs.push({ color: p.color, start: i, end: i });
        }
      });

      return runs.map((run, idx) => {

        const isFirst = idx === 0;
        const isLast = idx === runs.length - 1;

        const x0 = isFirst
          ? plotLeft
          : midpoint(xFor(run.start - 1), xFor(run.start));

        const x1 = isLast
          ? plotRight
          : midpoint(xFor(run.end), xFor(run.end + 1));

        // Half-pixel overlap prevents hairline gaps between adjacent clips.
        return {
          color: run.color,
          x0: isFirst ? x0 : x0 - 0.5,
          x1: isLast ? x1 : x1 + 0.5
        };
      });
    }

    function midpoint(a, b) {
      return (a + b) / 2;
    }

    // Nulls break the line rather than interpolating across the gap.
    function splitSegments(coords) {

      const segments = [];
      let current = [];

      coords.forEach(c => {

        if (c.y === null || c.y === undefined || isNaN(c.y)) {

          if (current.length) {
            segments.push(current);
            current = [];
          }

        } else {

          current.push(c);
        }
      });

      if (current.length) {
        segments.push(current);
      }

      return segments;
    }

    function buildLinePath(pts, smooth, yTop, yBottom) {

      if (!pts.length) {
        return "";
      }

      if (pts.length === 1) {
        return `M ${r2(pts[0].x)} ${r2(pts[0].y)} L ${r2(pts[0].x + 0.01)} ${r2(pts[0].y)}`;
      }

      if (!smooth) {
        return "M " + pts.map(p => `${r2(p.x)} ${r2(p.y)}`).join(" L ");
      }

      // Catmull-Rom converted to cubic beziers, with control points clamped
      // to the plot area so smoothing cannot overshoot the sparkline box.
      let d = `M ${r2(pts[0].x)} ${r2(pts[0].y)}`;

      for (let i = 0; i < pts.length - 1; i++) {

        const p0 = pts[i - 1] || pts[i];
        const p1 = pts[i];
        const p2 = pts[i + 1];
        const p3 = pts[i + 2] || pts[i + 1];

        const c1x = p1.x + (p2.x - p0.x) / 6;
        const c1y = clamp(p1.y + (p2.y - p0.y) / 6, yTop, yBottom);
        const c2x = p2.x - (p3.x - p1.x) / 6;
        const c2y = clamp(p2.y - (p3.y - p1.y) / 6, yTop, yBottom);

        d += ` C ${r2(c1x)} ${r2(c1y)}, ${r2(c2x)} ${r2(c2y)}, ${r2(p2.x)} ${r2(p2.y)}`;
      }

      return d;
    }

    function buildAreaPath(pts, smooth, yTop, yBottom, baselineY) {

      if (!pts.length) {
        return "";
      }

      const line = buildLinePath(pts, smooth, yTop, yBottom);

      const first = pts[0];
      const last = pts[pts.length - 1];

      return `${line} L ${r2(last.x)} ${r2(baselineY)} L ${r2(first.x)} ${r2(baselineY)} Z`;
    }

    function lastValuedPoint(series) {

      for (let i = series.length - 1; i >= 0; i--) {
        if (series[i].y !== null && series[i].y !== undefined) {
          return series[i];
        }
      }

      return null;
    }

    // =====================================================
    // INTERACTIONS
    // =====================================================

    function wireInteractions(host, state, geo) {

      const tip = host.querySelector("#" + geo.uid + "-tip");
      const svgEl = host.querySelector("svg");

      if (!tip || !svgEl) {
        return;
      }

      const series = state.points;
      const cfg = state.config;

      const indexAt = clientX => {

        const box = svgEl.getBoundingClientRect();
        const x = clientX - box.left;

        if (geo.chartType === "column") {
          return clamp(Math.floor((x - geo.padX) / geo.band), 0, geo.count - 1);
        }

        if (geo.count === 1 || geo.step === 0) {
          return 0;
        }

        return clamp(Math.round((x - geo.padX) / geo.step), 0, geo.count - 1);
      };

      svgEl.addEventListener("mousemove", event => {

        const point = series[indexAt(event.clientX)];

        if (!point || point.value === null) {
          tip.classList.remove("visible");
          return;
        }

        const lines = [
          `<div class="ksc-tooltip-key">${escapeHtml(point.label)}</div>`,
          `<div><span class="ksc-swatch" style="background:${escapeAttr(point.color)}"></span>` +
          `${escapeHtml(state.measure.label_short || state.measure.label)}: ` +
          `<b>${escapeHtml(cellText(point.cell))}</b></div>`
        ];

        if (cfg.show_comparison_series && state.compareMeasure && point.compareCell) {
          lines.push(
            `<div>${escapeHtml(state.compareMeasure.label_short || state.compareMeasure.label)}: ` +
            `<b>${escapeHtml(cellText(point.compareCell))}</b></div>`
          );
        }

        tip.innerHTML = lines.join("");
        tip.classList.add("visible");
        tip.style.left = point.x + "px";
        tip.style.top = (point.y === null ? 0 : point.y) + "px";

        svgEl.style.cursor =
          point.cell && point.cell.links && point.cell.links.length ? "pointer" : "default";
      });

      svgEl.addEventListener("mouseleave", () => {
        tip.classList.remove("visible");
      });

      svgEl.addEventListener("click", event => {

        const point = series[indexAt(event.clientX)];

        if (point && point.cell && point.cell.links && point.cell.links.length) {
          LookerCharts.Utils.openDrillMenu({ links: point.cell.links, event: event });
        }
      });
    }

    // Looker fires updateAsync on tile resize, but dashboard drag-resizes and
    // window resizes can settle after that call, so redraw on the observed box.
    function observeResize(el, card, state) {

      detachResizeObserver(el);

      if (typeof ResizeObserver === "undefined") {
        return;
      }

      let frame = null;
      let lastKey = "";

      const observer = new ResizeObserver(() => {

        if (frame) {
          cancelAnimationFrame(frame);
        }

        frame = requestAnimationFrame(() => {

          const box = state.host.getBoundingClientRect();
          const key = Math.floor(box.width) + "x" + Math.floor(box.height);

          if (key === lastKey) {
            return;
          }

          lastKey = key;

          if (document.body.contains(state.host)) {
            drawSparkline(state);
          }
        });
      });

      observer.observe(card);
      el._kscResizeObserver = observer;
    }

    function detachResizeObserver(el) {

      if (el._kscResizeObserver) {
        el._kscResizeObserver.disconnect();
        el._kscResizeObserver = null;
      }
    }

    // =====================================================
    // HELPERS
    // =====================================================

    function cellNumber(cell) {

      if (!cell) {
        return null;
      }

      const raw = cell.value;

      if (raw === null || raw === undefined || raw === "") {
        return null;
      }

      const parsed = Number(raw);

      return isFinite(parsed) ? parsed : null;
    }

    // Prefers Looker's own formatting so the tile honours value_format_name.
    function cellText(cell) {

      if (!cell) {
        return "";
      }

      try {
        if (typeof LookerCharts !== "undefined" && LookerCharts.Utils && LookerCharts.Utils.textForCell) {
          return LookerCharts.Utils.textForCell(cell);
        }
      } catch (e) {
        // fall through to the raw value
      }

      if (cell.rendered !== undefined && cell.rendered !== null) {
        return String(cell.rendered);
      }

      return cell.value === null || cell.value === undefined ? "" : String(cell.value);
    }

    function attachDrill(node, cell) {

      if (!node || !cell || !cell.links || !cell.links.length) {
        return;
      }

      node.classList.add("ksc-drillable");

      node.addEventListener("click", event => {
        LookerCharts.Utils.openDrillMenu({ links: cell.links, event: event });
      });
    }

    // Only used for aggregated KPIs, where no Looker-formatted cell exists.
    function formatNumber(value) {

      if (value === null || value === undefined || isNaN(value)) {
        return "\u2013";
      }

      const abs = Math.abs(value);
      const decimals = abs > 0 && abs < 1 ? 2 : (abs < 100 ? 1 : 0);

      return value.toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: decimals
      });
    }

    function num(value, fallback) {

      if (value === null || value === undefined || value === "") {
        return fallback;
      }

      const parsed = Number(value);

      return isFinite(parsed) ? parsed : fallback;
    }

    function px(value, fallback) {
      return num(value, fallback) + "px";
    }

    function clamp(value, lo, hi) {
      return Math.min(hi, Math.max(lo, value));
    }

    function r2(value) {
      return Math.round(value * 100) / 100;
    }

    function escapeHtml(value) {
      return String(value === null || value === undefined ? "" : value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }

    function escapeAttr(value) {
      return escapeHtml(value);
    }

    function renderError(container, title, message) {

      container.innerHTML = `
        <div class="ksc-error">
          <div class="ksc-error-box">
            <div class="ksc-error-title">${title}</div>
            ${message}
          </div>
        </div>
      `;
    }
  }
});
